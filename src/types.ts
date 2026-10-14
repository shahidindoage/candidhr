export type TabType = 'overview' | 'subscribers' | 'billing' | 'network';

export interface Subscriber {
  id: string;
  name: string;
  accountNo: string;
  plan: string;
  speed: string;
  status: 'active' | 'suspended' | 'pending';
  monthlyFee: number;
  lastPayment: string;
  ipAddress: string;
  node: string;
  usageGb: number;
  usageCapGb: number;
}

export interface Invoice {
  id: string;
  subscriberName: string;
  planName: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue' | 'retrying';
  gateway: string;
}

export interface HardwareVendor {
  name: string;
  category: string;
  status: 'Certified' | 'Native Driver';
}

export interface IspSolution {
  id: string;
  title: string;
  tagline: string;
  challenge: string;
  solution: string;
  outcome: string;
  iconName: string;
  badge: string;
  stats: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  summary?: string;
  isFeatured?: boolean;
}
