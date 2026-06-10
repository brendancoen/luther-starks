export type Post = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  read_time: string | null;
  display_date: string | null;
  url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export const CATEGORIES = [
  'BaaS',
  'Payments',
  'Embedded Finance',
  'Strategy',
  'ACH',
  'Leadership',
];
