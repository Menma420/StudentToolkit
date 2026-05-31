import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ToolMeta } from '@/types/tool';
import { ArrowRight } from 'lucide-react';

interface ToolCardProps {
  tool: ToolMeta;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/tools/${tool.slug}`} className="block group transition-all hover:-translate-y-1">
      <Card className="h-full border-2 group-hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            {/* HeroIcons or Lucide icons could be added here based on category */}
            <span className="font-bold text-sm">{tool.title.charAt(0)}</span>
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">{tool.title}</CardTitle>
          <CardDescription className="line-clamp-2">{tool.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm font-medium text-primary">
            Launch Tool
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
