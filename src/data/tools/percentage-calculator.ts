import { ToolMeta } from '@/types/tool';

export const percentageCalculatorMeta: ToolMeta = {
  slug: 'percentage-calculator',
  title: 'Percentage Calculator',
  shortDescription: 'Convert marks to percentage, find required marks for a target, or calculate aggregate scores.',
  description: 'A tool for all mark-related calculations. Easily convert your scores to percentages, determine what you need to score for your target percentage, or calculate overall aggregate marks across multiple subjects.',
  category: 'cgpa',
  component: 'PercentageCalculator',
  keywords: ['percentage calculator', 'marks to percentage', 'aggregate percentage calculator', 'calculate final marks'],
  faqs: [
    {
      question: 'How to calculate percentage from marks?',
      answer: 'To calculate percentage, divide the marks obtained by the total possible marks and multiply by 100. Formula: (Obtained / Total) × 100.'
    },
    {
      question: 'How to calculate required marks for a target percentage?',
      answer: 'To find required marks, multiply your target percentage (as a decimal) by the total marks. Formula: (Target % / 100) × Total Marks.'
    },
    {
      question: 'How does aggregate percentage calculation work?',
      answer: 'Aggregate percentage is calculated by summing up the marks obtained in all subjects and dividing by the sum of total marks across all those subjects, then multiplying by 100.'
    },
    {
      question: 'Is percentage different from CGPA?',
      answer: 'Yes, percentage is a direct measure of marks scored out of total marks (0-100 scale), while CGPA is a weighted average of grade points (usually on a 10-point scale).'
    },
    {
      question: 'Why do companies ask for aggregate percentage during placements?',
      answer: 'Companies use aggregate percentage to normalize academic performance across different universities and simplified ranking of candidates during recruitment drives.'
    }
  ],
  relatedTools: ['cgpa-calculator', 'attendance-calculator'],
  priority: 3,
};
