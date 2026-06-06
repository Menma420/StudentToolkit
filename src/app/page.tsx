import { getAllTools } from '@/lib/tools';
import { ToolCard } from '@/components/tools/ToolCard';
import { Calculator, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const tools = getAllTools();

  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative bg-muted/30 py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="mr-2">🚀</span> Built for Indian College Students
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Essential Tools for the <span className="text-primary">Ambitious Student</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Free tools for everyday academic calculations. Provide simple 
              utility for CGPA, attendance, and marks tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="#all-tools" 
                className={cn(buttonVariants({ size: 'lg' }), "px-8")}
              >
                Explore All Tools
              </Link>
              <Link 
                href="/about" 
                className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 space-y-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">Fast by Design</h3>
            <p className="text-sm text-muted-foreground">Lightweight pages designed for quick loading on mobile and desktop.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 space-y-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Calculator className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">Utility First</h3>
            <p className="text-sm text-muted-foreground">Interface designed for getting accurate results quickly, without distractions.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 space-y-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">Privacy First</h3>
            <p className="text-sm text-muted-foreground">No account required. Your inputs stay in your browser and are never stored.</p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="all-tools" className="container mx-auto px-4 scroll-mt-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Academic Toolkit</h2>
            <p className="text-muted-foreground">Simple calculators for CGPA, attendance, and marks.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative rounded-3xl bg-primary px-8 py-16 md:px-16 text-center text-primary-foreground overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to simplify your student life?</h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed font-medium">
              Start using simple academic tools for CGPA, attendance, and marks calculations.
            </p>
            <div className="pt-4">
              <Link 
                href="/tools/cgpa-calculator" 
                className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }), "px-8")}
              >
                Get Started for Free
              </Link>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
}
