export type ToolCategory = 'cgpa' | 'attendance' | 'exam' | 'placement' | 'study' | 'productivity' | 'finance' | 'ai';

export interface FAQ {
  question: string;
  answer: string;
}

export interface ToolMeta {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ToolCategory;
  component: string;
  keywords: string[];
  faqs: FAQ[];
  relatedTools: string[];
  priority: number;
}
