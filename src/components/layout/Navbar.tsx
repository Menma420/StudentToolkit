import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-primary">StudentToolkit<span className="text-foreground">.in</span></span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/tools/cgpa-calculator" className="text-sm font-medium transition-colors hover:text-primary">
            CGPA
          </Link>
          <Link href="/tools/attendance-calculator" className="text-sm font-medium transition-colors hover:text-primary">
            Attendance
          </Link>
          <Link 
            href="/about" 
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
