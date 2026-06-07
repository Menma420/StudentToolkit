import { ToolMeta } from '@/types/tool';

export const cgpaCalculatorMeta: ToolMeta = {
  slug: 'cgpa-calculator',
  title: 'CGPA Calculator',
  shortDescription: 'Calculate your CGPA or GPA instantly with verified support for VTU, Anna University, and standard systems.',
  description: 'A tool for Indian engineering and university students. Supports standard 10-point Indian grading scales and international 4-point GPA systems. Includes verified percentage conversion formulae for VTU (CGPA-0.75 × 10) and Anna University (CGPA × 10).',
  category: 'cgpa',
  component: 'CGPACalculator',
  keywords: ['cgpa calculator', 'vtucgpa calculator', 'anna university cgpa calculator', 'cgpa to percentage', 'gpa calculator', 'engineering cgpa calculator'],
  faqs: [
    {
      question: 'What is CGPA?',
      answer: 'Cumulative Grade Point Average (CGPA) is a grading system used in schools and colleges to measure the overall academic performance of a student. It is calculated as the weighted average of the grade points obtained in all subjects.'
    },
    {
      question: 'How is CGPA calculated in Indian universities?',
      answer: 'CGPA is calculated by dividing the sum of the product of credits and grade points for all subjects by the total number of credits across all semesters. The formula is: CGPA = Σ(Credits × Grade Points) / Σ(Total Credits).'
    },
    {
      question: 'How do I convert CGPA to percentage?',
      answer: 'The conversion formula varies by university. Many Indian universities use CGPA × 9.5. However, VTU uses (CGPA - 0.75) × 10, and Anna University uses CGPA × 10. Check our "Percentage vs CGPA" article for more details.'
    },
    {
      question: 'Do university formulas vary for CGPA conversion?',
      answer: 'Yes, conversion formulas are specific to the academic regulations of each university. While 9.5 is a common multiplier, many specific universities have their own regulatory formulas for placements and higher studies.'
    },
    {
      question: 'Is SGPA different from CGPA?',
      answer: 'Yes, SGPA (Semester Grade Point Average) refers to the grade point average of a single semester, while CGPA is the cumulative average across all semesters completed so far.'
    }
  ],
  relatedTools: ['attendance-calculator', 'percentage-calculator'],
  priority: 1,
};
