export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subcategories: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'motors',
    name: 'Motors',
    description: 'High-performance motors for various applications including BLDC, AC, and specialized industrial motors.',
    imageUrl: '/images/categories/bldc motors.jpg',
    subcategories: [
      'BLDC Motors',
      'AC Motors',
      'PSC Motors',
      'Shaded Pole Motors',
      'Synchronous Motors'
    ]
  },
  {
    id: 'valves',
    name: 'Valves',
    description: 'Precision-engineered valves for fluid control applications in various industries.',
    imageUrl: '/images/categories/valves.png',
    subcategories: [
      'Magnetic Valves',
      'Solenoid Valves',
      'Control Valves'
    ]
  },
  {
    id: 'current-transformers',
    name: 'Current Transformers',
    description: 'High-quality current transformers for accurate electrical measurements and protection systems.',
    imageUrl: '/images/categories/current-transformer.jpg',
    subcategories: [
      'Indoor Resin Cast CTs',
      'Outdoor Oil-Filled CTs',
      'Bar Primary CTs',
      'Ring Type CTs'
    ]
  },
  {
    id: 'locking-mechanisms',
    name: 'Locking Mechanisms',
    description: 'Secure and reliable locking mechanisms for appliances and security systems.',
    imageUrl: '/images/categories/locking-mech.png',
    subcategories: [
      'Electronic Locks',
      'Solenoid Locks',
      'Mechanical Locks'
    ]
  }
];
