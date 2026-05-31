import { ToolMeta } from '@/types/tool';
import { cgpaCalculatorMeta } from '@/data/tools/cgpa-calculator';

export const TOOLS: ToolMeta[] = [
  cgpaCalculatorMeta,
];

export function getAllTools() {
  return TOOLS.sort((a, b) => a.priority - b.priority);
}

export function getToolBySlug(slug: string) {
  return TOOLS.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: string) {
  return TOOLS.filter((tool) => tool.category === category);
}
