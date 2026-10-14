import { ResourceItem } from '../types';

export const clientLogos = [
  { name: 'Netwave', tag: 'FIBER ISP' },
  { name: 'SpeedyNet', tag: 'CABLE TV & BROADBAND' },
  { name: 'CityLink', tag: 'MUNICIPAL NETWORK' },
  { name: 'BharatNet', tag: 'WISP TOWER OPERATOR' },
  { name: 'MetroFibe', tag: 'FTTH PROVIDER' },
  { name: 'UniNet', tag: 'CAMPUS & INSTITUTE' },
];

export const mockResources: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'The Definitive Guide to RADIUS Accounting in Multi-Node ISP Deployments',
    category: 'Whitepaper',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    summary:
      'A practical architecture breakdown of how to design RADIUS accounting that stays accurate across BNG, BRAS and CPE nodes — including the failure modes that quietly leak billed revenue.',
    isFeatured: true,
  },
  {
    id: 'res-2',
    title: 'Zero-Touch Subscriber Onboarding with TR-069/ACS',
    category: 'Guide',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    summary: 'Automate CPE provisioning from plan activation to first ping.',
  },
  {
    id: 'res-3',
    title: 'Taming Unbilled Revenue Leakage in Recurring Billing',
    category: 'Playbook',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    summary: 'The reconciliation checkpoints that catch silent revenue loss.',
  },
  {
    id: 'res-4',
    title: 'Captive Portal Compliance for Public Hotspot Operators',
    category: 'Regulation',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
    summary: 'What log retention and OTP authentication rules actually require.',
  },
];