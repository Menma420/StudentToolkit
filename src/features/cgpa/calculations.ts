export interface Subject {
  id: string;
  name: string;
  gradePoints: number;
  credits: number;
}

export type CalculationResult = {
  cgpa: number;
  percentage: number;
  totalCredits: number;
  totalGradePoints: number;
};

/**
 * Verified CGPA and Percentage Calculation Engine
 */
export function calculateCGPA(subjects: Subject[], scale: string): CalculationResult {
  // Rule: Empty rows should not break calculation. Credits must be > 0.
  const validSubjects = subjects.filter(s => s.credits > 0 && s.gradePoints >= 0);

  if (validSubjects.length === 0) {
    return { cgpa: 0, percentage: 0, totalCredits: 0, totalGradePoints: 0 };
  }

  let totalWeightedGradePoints = 0;
  let totalCredits = 0;

  validSubjects.forEach((subject) => {
    // Formula: Σ(Credits × Grade Points)
    totalWeightedGradePoints += subject.gradePoints * subject.credits;
    totalCredits += subject.credits;
  });

  // Formula: Σ(Credits × Grade Points) / Σ(Credits)
  const cgpaDecimal = totalCredits > 0 ? totalWeightedGradePoints / totalCredits : 0;
  const cgpa = parseFloat(cgpaDecimal.toFixed(2));
  
  let percentage = 0;
  
  // Specific Percentage Conversion Formulae
  switch (scale) {
    case 'vtu':
      // Percentage = (CGPA - 0.75) × 10
      percentage = cgpa > 0.75 ? (cgpa - 0.75) * 10 : 0;
      break;
    case 'anna':
      // Percentage = CGPA × 10
      percentage = cgpa * 10;
      break;
    case '10':
      // Standard Estimate: CGPA × 9.5
      percentage = cgpa * 9.5;
      break;
    case '4':
    default:
      // No standard percentage conversion for 4-point GPA
      percentage = 0;
      break;
  }

  return {
    cgpa,
    percentage: parseFloat(percentage.toFixed(2)),
    totalCredits,
    totalGradePoints: totalWeightedGradePoints,
  };
}

export const GRADING_SCALES = [
  { label: 'Standard 10-Point Scale', value: '10' },
  { label: 'Standard 4-Point GPA', value: '4' },
  { label: 'VTU (Visvesvaraya Technological University)', value: 'vtu' },
  { label: 'Anna University (Regulations)', value: 'anna' },
];

export const GRADE_POINTS_ANNOTATED: Record<string, { label: string; value: number }[]> = {
  '10': [
    { label: 'O (Outstanding) - 10', value: 10 },
    { label: 'A+ (Excellent) - 9', value: 9 },
    { label: 'A (Very Good) - 8', value: 8 },
    { label: 'B+ (Good) - 7', value: 7 },
    { label: 'B (Above Average) - 6', value: 6 },
    { label: 'C (Average) - 5', value: 5 },
    { label: 'P (Pass) - 4', value: 4 },
    { label: 'F (Fail) - 0', value: 0 },
  ],
  'vtu': [
    { label: 'S+ / O - 10', value: 10 },
    { label: 'S / A - 9', value: 9 },
    { label: 'A / B - 8', value: 8 },
    { label: 'B / C - 7', value: 7 },
    { label: 'C / D - 6', value: 6 },
    { label: 'D / E - 5', value: 5 },
    { label: 'E / P - 4', value: 4 },
    { label: 'F - 0', value: 0 },
  ],
  'anna': [
    { label: 'S (Outstanding) - 10', value: 10 },
    { label: 'A+ (Excellent) - 9', value: 9 },
    { label: 'A (Very Good) - 8', value: 8 },
    { label: 'B+ (Good) - 7', value: 7 },
    { label: 'B (Above Average) - 6', value: 6 },
    { label: 'C (Average) - 5', value: 5 },
    { label: 'U (Re-appearance) - 0', value: 0 },
    { label: 'SA (Shortage of Attendance) - 0', value: 0 },
    { label: 'WC (Withdrawal) - 0', value: 0 },
  ],
  '4': [
    { label: 'A (4.0)', value: 4 },
    { label: 'A- (3.7)', value: 3.7 },
    { label: 'B+ (3.3)', value: 3.3 },
    { label: 'B (3.0)', value: 3 },
    { label: 'B- (2.7)', value: 2.7 },
    { label: 'C+ (2.3)', value: 2.3 },
    { label: 'C (2.0)', value: 2 },
    { label: 'C- (1.7)', value: 1.7 },
    { label: 'D (1.0)', value: 1 },
    { label: 'F (0.0)', value: 0 },
  ],
};
