import { ToolLayout } from '@/components/tools/ToolLayout';
import CGPACalculator from '@/components/calculators/CGPACalculator';
import { getToolBySlug } from '@/lib/tools';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  
  if (!tool) return {};

  return {
    title: tool.title,
    description: tool.shortDescription,
    keywords: tool.keywords,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  // Map component name to actual component
  const components: Record<string, React.ReactNode> = {
    'CGPACalculator': <CGPACalculator />,
  };

  return (
    <ToolLayout tool={tool}>
      {components[tool.component] || <div className="p-12 text-center border rounded-xl bg-muted/20">This tool is coming soon.</div>}
    </ToolLayout>
  );
}

export async function generateStaticParams() {
  const { TOOLS } = await import('@/lib/tools');
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}
