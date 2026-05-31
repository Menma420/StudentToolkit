import { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { ToolMeta } from '@/types/tool';

interface ToolLayoutProps {
  tool: ToolMeta;
  children: ReactNode;
}

export function ToolLayout({ tool, children }: ToolLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: 'Tools', href: '/' },
        { label: tool.title }
      ]} />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-4">{tool.title}</h1>
            <p className="text-lg text-muted-foreground">{tool.shortDescription}</p>
          </header>
          
          <div className="space-y-12">
            {children}
            
            {/* SEO Content Section */}
            <section className="prose prose-blue max-w-none border-t pt-12 text-foreground">
              <h2 className="text-2xl font-semibold mb-4">About {tool.title}</h2>
              <p>{tool.description}</p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4 not-prose">
                {tool.faqs.map((faq, index) => (
                  <div key={index} className="rounded-lg border bg-card p-4">
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold mb-4 text-foreground">How it works</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">1</span>
                Enter your subjects and grade points.
              </li>
              <li className="flex gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">2</span>
                Select your academic grading scale.
              </li>
              <li className="flex gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">3</span>
                Get instant CGPA/GPA results locally.
              </li>
            </ul>
          </div>
          
          <div className="rounded-xl border border-dashed p-6 text-center text-xs text-muted-foreground">
            Simple, fast, and practical calculators for everyday academic life.
          </div>
        </aside>
      </div>
    </div>
  );
}
