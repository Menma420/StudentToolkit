import { ToolMeta } from '@/types/tool';

export const cgpaCalculatorMeta: ToolMeta = {
  slug: 'cgpa-calculator',
  title: 'CGPA Calculator',
  shortDescription: 'Calculate your CGPA or GPA instantly with verified support for VTU, Anna University, and standard systems.',
  description: 'The most accurate academic calculator for Indian engineering and university students. Supports standard 10-point Indian grading scales and international 4-point GPA systems. Includes verified percentage conversion formulae for VTU (CGPA-0.75 × 10) and Anna University (CGPA × 10).',
  category: 'cgpa',
  component: 'CGPACalculator',
  keywords: ['cgpa calculator', 'vtucgpa calculator', 'anna university cgpa calculator', 'cgpa to percentage', 'gpa calculator', 'engineering cgpa calculator'],
  faqs: [
    {
      question: 'How is VTU CGPA converted to percentage?',
      answer: 'According to VTU regulations for 2015/2017/2018 schemes, the conversion formula is: Percentage = (CGPA - 0.75) × 10.'
    },
    {
      question: 'How is Anna University CGPA converted to percentage?',
      answer: 'As per Anna University regulations, the conversion formula is: Percentage = CGPA × 10.'
    },
    {
      question: 'How is standard Indian CGPA converted?',
      answer: 'While it varies, the standard benchmark for most Indian universities is CGPA × 9.5.'
    }
  ],
  relatedTools: ['attendance-calculator', 'percentage-calculator'],
  priority: 1,
};
