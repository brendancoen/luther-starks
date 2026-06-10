export type Post = {
  id: string;
  category: string;
  title: string;
  slug: string | null;
  excerpt: string;
  content: string | null;
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

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}
