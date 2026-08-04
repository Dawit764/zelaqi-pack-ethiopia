import { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { motion, AnimatePresence } from 'motion/react';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SampleRequestModal({ isOpen, onClose }: SampleRequestModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    client_name: '',
    contact_info: '',
    packaging_type: 'Custom Paper Bag',
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    // Delay resetting state to allow exit animation to finish
    setTimeout(() => {
      setSuccess(false);
      setError('');
      setFormData({
        client_name: '',
        contact_info: '',
        packaging_type: 'Custom Paper Bag',
      });
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: dbError } = await supabase
        .from('sample_requests')
        .insert([
          {
            client_name: formData.client_name,
            contact_info: formData.contact_info,
            packaging_type: formData.packaging_type,
            status: 'Pending',
            source: 'Website Form',
          },
        ]);

      if (dbError) throw dbError;
      setSuccess(true);
    } catch (err: any) {
      console.error('Error submitting sample request:', err);
      setError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-md"
            onClick={handleClose}
          />
          
          {/* Modal Body */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden"
          >
            {/* Glassmorphism Card */}
            <div className="bg-white/85 backdrop-blur-2xl border border-white/60 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-white/50 bg-white/30">
                <h2 className="text-xl font-bold text-stone-800 tracking-tight">Request a Sample</h2>
                <button
                  onClick={handleClose}
                  className="text-stone-400 hover:text-stone-700 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-all active:scale-95"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {success ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="flex justify-center mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                        className="bg-emerald-100 p-4 rounded-full"
                      >
                        <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">Request Received!</h3>
                    <p className="text-stone-600 mb-8 leading-relaxed">
                      Thank you for your interest. We've received your sample request and will be in touch shortly.
                    </p>
                    <button
                      onClick={handleClose}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98]"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-red-50 text-red-700 p-4 rounded-xl flex items-start gap-3 border border-red-100"
                      >
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">{error}</p>
                      </motion.div>
                    )}

                    <div className="space-y-1.5">
                      <label htmlFor="client_name" className="block text-sm font-semibold text-stone-700">
                        Company / Client Name <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="client_name"
                        name="client_name"
                        required
                        value={formData.client_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-white/70 border border-white/50 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all outline-none shadow-inner placeholder:text-stone-400 text-stone-800 font-medium"
                        placeholder="e.g. Acme Corp"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact_info" className="block text-sm font-semibold text-stone-700">
                        Contact Info <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact_info"
                        name="contact_info"
                        required
                        value={formData.contact_info}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-white/70 border border-white/50 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all outline-none shadow-inner placeholder:text-stone-400 text-stone-800 font-medium"
                        placeholder="Email or Phone Number"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="packaging_type" className="block text-sm font-semibold text-stone-700">
                        Packaging Type <span className="text-emerald-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="packaging_type"
                          name="packaging_type"
                          required
                          value={formData.packaging_type}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-white/70 border border-white/50 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all outline-none appearance-none cursor-pointer shadow-inner text-stone-800 font-medium"
                        >
                          <option value="Custom Paper Bag">Custom Paper Bag</option>
                          <option value="Matte Box">Matte Box</option>
                          <option value="Eco Kraft">Eco Kraft</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#44403C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative overflow-hidden bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white font-bold py-4 px-4 rounded-xl transition-all shadow-[0_8px_20px_-6px_rgba(5,150,105,0.4)] hover:shadow-[0_12px_24px_-6px_rgba(5,150,105,0.5)] active:scale-[0.98] active:shadow-none flex items-center justify-center gap-2 group"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span className="relative z-10">Submit Request</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
