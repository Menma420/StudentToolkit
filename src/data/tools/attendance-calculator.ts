import { ToolMeta } from '@/types/tool';

export const attendanceCalculatorMeta: ToolMeta = {
  slug: 'attendance-calculator',
  title: 'Attendance Calculator',
  shortDescription: 'Calculate how many classes you can miss or need to attend to maintain your target percentage.',
  description: 'A smart tool for students to track and manage their attendance. Whether you want to know if you can skip the next lecture or how many more you need to attend to reach 75%, this calculator provides instant, accurate results.',
  category: 'attendance',
  component: 'AttendanceCalculator',
  keywords: ['attendance calculator', 'bunk calculator', 'maintain 75 attendance', 'how many classes can i miss'],
  faqs: [
    {
      question: 'How many classes can I miss safely?',
      answer: 'This depends on your current attendance and target percentage. Our tool calculates the maximum number of future classes you can skip while staying above your goal.'
    },
    {
      question: 'What is the standard attendance requirement in India?',
      answer: 'Most Indian universities require a minimum of 75% attendance to be eligible for final exams.'
    }
  ],
  relatedTools: ['cgpa-calculator', 'percentage-calculator'],
  priority: 2,
};
