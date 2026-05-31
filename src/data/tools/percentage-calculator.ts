import { ToolMeta } from '@/types/tool';

export const percentageCalculatorMeta: ToolMeta = {
  slug: 'percentage-calculator',
  title: 'Percentage Calculator',
  shortDescription: 'Convert marks to percentage, find required marks for a target, or calculate aggregate scores.',
  description: 'The definitive tool for all mark-related calculations. Easily convert your scores to percentages, determine what you need to score for your target percentage, or calculate overall aggregate marks across multiple subjects.',
  category: 'cgpa',
  component: 'PercentageCalculator',
  keywords: ['percentage calculator', 'marks to percentage', 'aggregate percentage calculator', 'calculate final marks'],
  faqs: [
    {
      question: 'How do I calculate aggregate percentage?',
      answer: 'To calculate aggregate percentage, sum up all the marks you obtained across all subjects and divide them by the total possible marks across those same subjects, then multiply by 100.'
    }
  ],
  relatedTools: ['cgpa-calculator', 'attendance-calculator'],
  priority: 3,
};
