import { Mail, MessageCircle, Info } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-xl text-muted-foreground">We&apos;re here to help you succeed.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border p-8 space-y-4 bg-muted/30">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-lg">Email Us</h3>
              <p className="text-muted-foreground">For tool suggestions, bug reports, or partnership inquiries.</p>
              <a 
                href="mailto:contact@studenttoolkit.in" 
                className="text-primary font-semibold hover:underline block pt-2"
              >
                contact@studenttoolkit.in
              </a>
            </div>
          </div>

          <div className="rounded-xl border p-8 space-y-4 bg-muted/30">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-lg">Feedback</h3>
              <p className="text-muted-foreground">We value your input to make StudentToolkit better for everyone.</p>
              <p className="text-primary font-semibold pt-2">Suggestions Welcome!</p>
            </div>
          </div>
        </div>

        <section className="rounded-2xl bg-primary/5 border border-primary/10 p-8 space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Info className="h-5 w-5" />
            <h2 className="font-bold text-xl text-foreground">Project Status</h2>
          </div>
          <div className="prose prose-blue text-muted-foreground">
            <p>
              StudentToolkit is currently an early-stage student utility project. 
              Our mission is to build the fastest and most accurate academic toolkit for students in India. 
            </p>
            <p>
              If you find any calculation errors or have ideas for new tools (like Rank Predictors 
              or Study Timers), please don&apos;t hesitate to reach out!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
