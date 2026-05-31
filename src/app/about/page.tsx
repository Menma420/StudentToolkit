export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About StudentToolkit.in</h1>
          <p className="text-xl text-muted-foreground">Built for students, by people who understand the struggle.</p>
        </header>
        
        <section className="prose prose-blue max-w-none text-foreground">
          <p>
            Many student utility sites are slow, cluttered, or too generic for Indian college systems. 
            StudentToolkit is built to be simple, fast, and practical for everyday academic calculations.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <div className="space-y-2 p-4 border rounded-lg">
              <h3 className="font-bold">Fast by Design</h3>
              <p className="text-sm text-muted-foreground">Lightweight pages built for quick loading on mobile and desktop.</p>
            </div>
            <div className="space-y-2 p-4 border rounded-lg">
              <h3 className="font-bold">India Specific</h3>
              <p className="text-sm text-muted-foreground">Support for common Indian grading systems, including university-specific formats where possible.</p>
            </div>
            <div className="space-y-2 p-4 border rounded-lg">
              <h3 className="font-bold">Privacy First</h3>
              <p className="text-sm text-muted-foreground">No account is required, and calculator inputs stay in your browser.</p>
            </div>
            <div className="space-y-2 p-4 border rounded-lg">
              <h3 className="font-bold">Utility First</h3>
              <p className="text-sm text-muted-foreground">The interface is designed around getting accurate results quickly, without unnecessary distractions.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Commitment</h2>
          <p>
            We are committed to providing reliable utility tools for college students. As we grow, 
            we will continue to refine our calculators and expand our support for more academic 
            grading systems to help you stay on top of your performance.
          </p>
        </section>
      </div>
    </div>
  );
}
