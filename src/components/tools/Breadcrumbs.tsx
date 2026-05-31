import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-primary">
            <Home className="w-3 h-3 mr-1.5" />
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-3 h-3 text-muted-foreground mx-1" />
            {item.href ? (
              <Link href={item.href} className="text-xs font-medium text-muted-foreground hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-xs font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
