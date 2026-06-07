import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col h-full bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">{post.category}</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.publishedDate}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <User className="w-3 h-3 text-primary" />
            {post.author}
          </div>
          <Link 
            href={`/blog/${post.slug}`} 
            className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            Read More <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
