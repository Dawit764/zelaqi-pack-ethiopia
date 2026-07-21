import { Partner, CapExItem, MonthlyProjection, TimelineEvent, SupplierContact } from './types';

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Dandi Mulugeta',
    initials: 'DM',
    studentId: 'UGR/6134/18',
    role: 'Strategic Lead',
    email: 'dandimulugeta35@gmail.com',
    colorClass: 'from-emerald-500 to-teal-500',
  },
  {
    id: '2',
    name: 'Dawit Girma',
    initials: 'DG',
    studentId: 'UGR/4304/18',
    role: 'Operations Supervisor',
    email: 'girmadawit612@gmail.com',
    colorClass: 'from-teal-500 to-emerald-600',
  },
  {
    id: '3',
    name: 'Ebasa Teshome',
    initials: 'ET',
    studentId: 'UGR/9593/18',
    role: 'Finance & Procurement',
    email: 'ebasateshome@gmail.com',
    colorClass: 'from-emerald-600 to-amber-500',
  },
  {
    id: '4',
    name: 'Edlawit Yehualawork',
    initials: 'EY',
    studentId: 'UGR/4155/18',
    role: 'Sales Coordinator',
    email: 'atleedlawityehualawork@gmail.com',
    colorClass: 'from-amber-500 to-emerald-600',
  },
  {
    id: '5',
    name: 'Efrata Mokonnen',
    initials: 'EM',
    studentId: 'UGR/0044/18',
    role: 'Quality Auditor',
    email: 'efrataefiti21@gmail.com',
    colorClass: 'from-emerald-600 to-teal-600',
  },
];

export const capexItems: CapExItem[] = [
  {
    name: 'Bag-Making Machinery',
    cost: 160000,
    pct: 32,
    color: 'stroke-emerald-600',
    note: 'Semi-automatic units (flat/gusset packaging lines)',
  },
  {
    name: 'Working Capital Reserve',
    cost: 110000,
    pct: 22,
    color: 'stroke-amber-500',
    note: 'First 3 months employee wages + utility buffer',
  },
  {
    name: 'Premises & Setup',
    cost: 100000,
    pct: 20,
    color: 'stroke-stone-700',
    note: 'First/last rent deposit + minor layout setup',
  },
  {
    name: 'Initial Raw Materials',
    cost: 80000,
    pct: 16,
    color: 'stroke-teal-500',
    note: 'Kraft paper rolls (480kg), starch glue, handles',
  },
  {
    name: 'Office Equip & Tools',
    cost: 20000,
    pct: 4,
    color: 'stroke-emerald-400',
    note: 'Desks, chairs, computer, small tools',
  },
  {
    name: 'Licenses & Permits',
    cost: 15000,
    pct: 3,
    color: 'stroke-amber-300',
    note: 'Business registration, environmental clear license fee',
  },
  {
    name: 'Contingency buffer',
    cost: 15000,
    pct: 3,
    color: 'stroke-red-400',
    note: 'Funds kept for emergency backup processes',
  },
];

export const monthlyProjections: MonthlyProjection[] = [
  { m: 'Month 1', rev: 40000, cogs: 10000, opex: 76000, cash: -46000 },
  { m: 'Month 2', rev: 60000, cogs: 15000, opex: 76000, cash: -31000 },
  { m: 'Month 3', rev: 80000, cogs: 20000, opex: 76000, cash: -16000 },
  { m: 'Month 4', rev: 100000, cogs: 25000, opex: 76000, cash: -1000 },
  { m: 'Month 5', rev: 110000, cogs: 27500, opex: 76000, cash: 6500 },
  { m: 'Month 6', rev: 120000, cogs: 30000, opex: 76000, cash: 14000 },
  { m: 'Month 7', rev: 130000, cogs: 32500, opex: 76000, cash: 21500 },
  { m: 'Month 8', rev: 140000, cogs: 35000, opex: 76000, cash: 29000 },
  { m: 'Month 9', rev: 145000, cogs: 36250, opex: 76000, cash: 32750 },
  { m: 'Month 10', rev: 150000, cogs: 37500, opex: 76000, cash: 36500 },
  { m: 'Month 11', rev: 155000, cogs: 38750, opex: 76000, cash: 40250 },
  { m: 'Month 12', rev: 160000, cogs: 40000, opex: 76000, cash: 44000 },
];

export const timelineEvents: TimelineEvent[] = [
  {
    date: 'May 2026',
    title: 'Company Registration & Licensing',
    description: 'Complete official company registration and secure licenses. Concurrently initiate direct machinery imports (expected to take approximately 3 months due to freight processes).',
  },
  {
    date: 'June 2026',
    title: 'Securing Space & Utilities',
    description: 'Secure a lease on a 100-150 m² space in Addis Ketema. Set up grid electrical connections (5-10 kW), coordinate water pipelines, and clear administrative requirements.',
  },
  {
    date: 'August 2026',
    title: 'Equipment Arrival & Assembly',
    description: 'Complete machinery customs clearance and transport to site. Begin professional installation and calibration of semi-automatic production lines while onboarding staff.',
  },
  {
    date: 'September 2026',
    title: 'Trial Production Runs',
    description: 'Begin initial low-volume runs to test machinery limits, evaluate materials durability, and establish our core Quality Control validation check points.',
  },
  {
    date: 'October 2026',
    title: 'Official Market Launch',
    description: 'Launch commercial supply contracts targeting small-to-medium retail vendors in Merkato, leveraging active marketing campaigns via Telegram and face-to-face visits.',
  },
];

export const supplierContacts: SupplierContact[] = [
  {
    supplier: 'Ajora General Trading',
    product: 'Kraft paper (rolls/sheets)',
    contactInfo: '+251-115-548887 (Mr. Berhanu Balcha)',
  },
  {
    supplier: 'Blue Nile PP & Craft',
    product: 'Large-scale PP/PE bags',
    contactInfo: '+251-115-574041',
  },
];
