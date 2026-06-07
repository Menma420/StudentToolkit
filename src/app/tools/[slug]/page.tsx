import { ToolLayout } from '@/components/tools/ToolLayout';
import CGPACalculator from '@/components/calculators/CGPACalculator';
import AttendanceCalculator from '@/components/calculators/AttendanceCalculator';
import PercentageCalculator from '@/components/calculators/PercentageCalculator';
import { getToolBySlug, getAllTools } from '@/lib/tools';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog/posts';

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
    'AttendanceCalculator': <AttendanceCalculator />,
    'PercentageCalculator': <PercentageCalculator />,
  };

  const howItWorksSteps: Record<string, string[]> = {
    'cgpa-calculator': [
      'Enter your subjects, credits, and grade points.',
      'Select your grading scale or university format.',
      'Get your weighted CGPA/GPA and percentage estimate instantly.'
    ],
    'attendance-calculator': [
      'Enter classes attended and total classes held.',
      'Set your target attendance percentage, such as 75%.',
      'See your current attendance, how many classes you can miss, or how many you must attend.'
    ],
    'percentage-calculator': [
      'Choose marks-to-percentage, percentage-to-marks, or aggregate mode.',
      'Enter your marks, total marks, or subject-wise scores.',
      'Get your percentage, required marks, or aggregate result instantly.'
    ]
  };

  // Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.title,
    description: tool.shortDescription,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: tool.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  };

  const relatedPosts = blogPosts.filter(post => post.relatedTools.includes(slug));

  return (
    <ToolLayout tool={tool} howItWorks={howItWorksSteps[slug]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="space-y-12">
        {components[tool.component] || <div className="p-12 text-center border rounded-xl bg-muted/20">This tool is coming soon.</div>}
        
        {relatedPosts.length > 0 && (
          <section className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-6">Expert Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedPosts.map(post => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="p-4 rounded-xl border bg-card hover:border-primary transition-colors flex flex-col gap-2"
                >
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <span className="text-xs font-bold text-primary mt-2 flex items-center gap-1">Read Guide</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </ToolLayout>
  );
}

export async function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}
