import { ToolMeta } from '@/types/tool';
import { cgpaCalculatorMeta } from '@/data/tools/cgpa-calculator';
import { attendanceCalculatorMeta } from '@/data/tools/attendance-calculator';
import { percentageCalculatorMeta } from '@/data/tools/percentage-calculator';

export const TOOLS: ToolMeta[] = [
  cgpaCalculatorMeta,
  attendanceCalculatorMeta,
  percentageCalculatorMeta
];

export function getAllTools(): ToolMeta[] {
  return TOOLS.sort((a, b) => a.priority - b.priority);
}

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return TOOLS.find(tool => tool.slug === slug);
}

export function getRelatedTools(tool: ToolMeta): ToolMeta[] {
  return TOOLS.filter(t => 
    tool.relatedTools.includes(t.slug)
  );
}
