import { getAllPosts } from '@/data/blog/posts';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { Breadcrumbs } from '@/components/tools/Breadcrumbs';

export const metadata = {
  title: 'Blog | Academic & Productivity Tips for Students',
  description: 'Practical guides and articles to help Indian college students master their CGPA, track attendance, and prepare for placements.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-muted/30 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
        
        <header className="max-w-3xl mb-12 mt-4 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Academic Guides</h1>
          <p className="text-xl text-muted-foreground">
            Simple, honest advice for navigating college life, from calculations to career preparation.
          </p>
        </header>

        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}
