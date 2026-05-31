export type AttendanceResult = {
  currentPercentage: number;
  status: 'above' | 'below' | 'exact';
  message: string;
  classesToAttend?: number;
  classesToMiss?: number;
};

/**
 * Pure logic for Attendance Calculation
 */
export function calculateAttendance(
  attended: number,
  total: number,
  target: number = 75
): AttendanceResult {
  if (total <= 0) return { currentPercentage: 0, status: 'exact', message: 'Total classes must be greater than 0.' };
  
  const currentPercentage = (attended / total) * 100;
  
  // Status 1: Above Target (How many can I miss?)
  if (currentPercentage >= target) {
    // Equation: (attended) / (total + x) = target / 100
    // x = (attended * 100 / target) - total
    const maxTotal = Math.floor((attended * 100) / target);
    const classesToMiss = Math.max(0, maxTotal - total);
    
    return {
      currentPercentage: parseFloat(currentPercentage.toFixed(2)),
      status: 'above',
      message: classesToMiss > 0 
        ? `You can miss the next ${classesToMiss} class${classesToMiss === 1 ? '' : 'es'} and still stay above ${target}%.`
        : `You are exactly at ${target}%. Don't miss any more classes!`,
      classesToMiss
    };
  } 
  
  // Status 2: Below Target (How many must I attend?)
  // Equation: (attended + x) / (total + x) = target / 100
  // x = (target * total - 100 * attended) / (100 - target)
  const classesToAttend = Math.ceil((target * total - 100 * attended) / (100 - target));
  
  return {
    currentPercentage: parseFloat(currentPercentage.toFixed(2)),
    status: 'below',
    message: `You need to attend the next ${classesToAttend} class${classesToAttend === 1 ? '' : 'es'} to reach ${target}%.`,
    classesToAttend
  };
}
