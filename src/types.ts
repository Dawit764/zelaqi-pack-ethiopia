export interface Partner {
  id: string;
  name: string;
  initials: string;
  studentId: string;
  role: string;
  email: string;
  colorClass: string;
}

export interface CapExItem {
  name: string;
  cost: number;
  pct: number;
  color: string;
  note: string;
}

export interface MonthlyProjection {
  m: string;
  rev: number;
  cogs: number;
  opex: number;
  cash: number;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface SupplierContact {
  supplier: string;
  product: string;
  contactInfo: string;
}
