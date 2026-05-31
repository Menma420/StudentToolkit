export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground">Effective Date: May 31, 2026</p>
        
        <section className="prose prose-blue max-w-none text-foreground">
          <p>
            At StudentToolkit.in, we respect your privacy. This policy explains what information we 
            collect and how we use it.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
          <p>
            <strong>Usage Data:</strong> We use Google Analytics 4 (GA4) to collect anonymous usage data 
            such as page views, time spent on the site, and interaction with tools. This helps us 
            improve our services. We do NOT collect personally identifiable information (PII).
          </p>
          <p>
            <strong>Calculator Data:</strong> Any data you enter into our calculators (like grades or 
            attendance) is processed locally in your browser. This data never leaves your device 
            and is not stored on our servers.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">2. Cookies</h2>
          <p>
            We use cookies to understand site usage and to remember your preferences (like your 
            grading scale selection). You can disable cookies in your browser settings if you wish.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">3. Third-Party Services</h2>
          <p>
            We use Google Analytics for traffic analysis. These services may collect information 
            sent by your browser as part of a web page request.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at contact@studenttoolkit.in.
          </p>
        </section>
      </div>
    </div>
  );
}
