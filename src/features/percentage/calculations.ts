export type MarksSubject = {
  id: string;
  obtained: number;
  total: number;
};

/**
 * Pure logic for Percentage calculations
 */
export const PercentageLogic = {
  marksToPercentage: (obtained: number, total: number) => {
    if (total <= 0) return 0;
    return parseFloat(((obtained / total) * 100).toFixed(2));
  },

  percentageToMarks: (percentage: number, total: number) => {
    return parseFloat(((percentage / 100) * total).toFixed(2));
  },

  calculateAggregate: (subjects: MarksSubject[]) => {
    const valid = subjects.filter(s => s.total > 0);
    if (valid.length === 0) return { percentage: 0, totalObtained: 0, totalMarks: 0 };

    const sumObtained = valid.reduce((acc, s) => acc + s.obtained, 0);
    const sumTotal = valid.reduce((acc, s) => acc + s.total, 0);
    const percentage = parseFloat(((sumObtained / sumTotal) * 100).toFixed(2));

    return {
      percentage,
      totalObtained: sumObtained,
      totalMarks: sumTotal
    };
  }
};
