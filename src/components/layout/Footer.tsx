import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">StudentToolkit.in</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Simple, free utility tools for Indian college students.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Calculators</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tools/cgpa-calculator" className="hover:text-primary transition-colors">CGPA Calculator</Link></li>
              <li><Link href="/tools/attendance-calculator" className="hover:text-primary transition-colors">Attendance Calculator</Link></li>
              <li><Link href="/tools/percentage-calculator" className="hover:text-primary transition-colors">Percentage Calculator</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors font-semibold">Academic Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground text-xs">
              <li>Built for students by people who care about speed and utility.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} StudentToolkit.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
