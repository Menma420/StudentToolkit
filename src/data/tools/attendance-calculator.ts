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
      question: 'How is attendance percentage calculated?',
      answer: 'Attendance percentage is calculated using the formula: (Number of Classes Attended / Total Number of Classes Conducted) × 100.'
    },
    {
      question: 'What does 75% attendance mean in Indian colleges?',
      answer: 'Most Indian universities have a mandatory 75% attendance rule. If your attendance falls below this threshold, you may be ineligible to appear for final semester examinations.'
    },
    {
      question: 'How many classes can I miss safely?',
      answer: 'The number of classes you can miss depends on your current attendance and your total classes. Use our calculator to find your "bunk margin" based on your specific target (usually 75% or 80%).'
    },
    {
      question: 'How many classes must I attend to recover my attendance?',
      answer: 'If you are below your target, you need to attend a certain number of future classes consecutively. Our calculator determines the exact number of classes required to reach your target percentage.'
    },
    {
      question: 'Does bunking one class affect my percentage significantly?',
      answer: 'Early in the semester, when total classes are low, every bunk has a high impact. As the total count of classes increases, the impact of a single bunk decreases.'
    }
  ],
  relatedTools: ['cgpa-calculator', 'percentage-calculator'],
  priority: 2,
};
