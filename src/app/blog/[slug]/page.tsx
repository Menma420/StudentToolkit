import { getPostBySlug, getAllPosts } from '@/data/blog/posts';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/tools/Breadcrumbs';
import { Calendar, User, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'StudentToolkit.in',
    },
    datePublished: post.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title }
        ]} 
      />

      <header className="mt-8 mb-12 space-y-6 border-b pb-8">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.publishedDate}
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            5 min read
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {post.title}
        </h1>
      </header>

      <div 
        className="prose prose-blue prose-lg max-w-none prose-headings:font-bold prose-pre:bg-muted/50 prose-pre:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-16 pt-8 border-t space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-muted/30 p-8 rounded-2xl">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Simplify your results</h3>
            <p className="text-muted-foreground text-sm">Use our verified tools to calculate your academic scores instantly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/tools/cgpa-calculator" className={cn(buttonVariants({ variant: 'default' }))}>
              CGPA Calculator
            </Link>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <span className="text-sm">Helpful guide? Share it with your friends:</span>
          <button className="p-2 hover:bg-muted rounded-full transition-colors"><Share2 className="w-5 h-5" /></button>
        </div>
      </footer>
    </article>
  );
}
