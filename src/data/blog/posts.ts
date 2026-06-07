import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-calculate-cgpa-in-indian-colleges',
    title: 'How to Calculate CGPA in Indian Colleges (Step-by-Step)',
    excerpt: 'Understand the weighted CGPA calculation process using credits and grade points, and learn why university formulas vary.',
    publishedDate: '2026-06-05',
    author: 'StudentToolkit Team',
    category: 'Academics',
    relatedTools: ['cgpa-calculator', 'percentage-calculator'],
    content: `
      <h2>The Basics of CGPA Calculation</h2>
      <p>Cumulative Grade Point Average (CGPA) is the standard metric used by Indian universities to measure a student's overall academic performance. Unlike simple percentages, CGPA is a weighted average based on course credits.</p>
      
      <h3>1. Understanding Credits and Grade Points</h3>
      <p>Each subject in your semester is assigned a specific number of 'credits' (usually ranging from 1 to 5). Similarly, your performance is assigned a 'Grade Point' (usually on a 10-point scale where O or S is 10, A+ is 9, etc.).</p>
      
      <h3>2. The Core Formula</h3>
      <p>The standard formula for Semester Grade Point Average (SGPA) is:</p>
      <pre>SGPA = Σ(Credits × Grade Points) / Σ(Total Credits)</pre>
      
      <p>CGPA is then calculated by taking the weighted average of all your SGPAs across different semesters.</p>

      <h3>3. Practical Example</h3>
      <p>Let's say you have two subjects:</p>
      <ul>
        <li>Mathematics: 4 Credits, Grade Point 9 (A+)</li>
        <li>Physics: 3 Credits, Grade Point 8 (A)</li>
      </ul>
      <p>Total Weighted Points = (4 × 9) + (3 × 8) = 36 + 24 = 60</p>
      <p>Total Credits = 4 + 3 = 7</p>
      <p>SGPA = 60 / 7 = 8.57</p>

      <div class="my-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h4 class="text-primary font-bold mb-2">Need a quick calculation?</h4>
        <p>Use our <a href="/tools/cgpa-calculator" class="font-semibold underline">Verified CGPA Calculator</a> which supports 10-point, 4-point, VTU, and Anna University scales.</p>
      </div>

      <h3>4. Why Formulas Vary</h3>
      <p>Universities like VTU and Anna University have specific conversion methods for their own schemes. For example, VTU uses (CGPA - 0.75) × 10 for percentage conversion, while others use CGPA × 9.5. Always check your specific university regulations.</p>
    `
  },
  {
    slug: 'attendance-percentage-rules-indian-colleges',
    title: 'Attendance Percentage Rules in Indian Colleges: A Practical Guide',
    excerpt: 'Learn about the 75% attendance rule, bunk margins, and how to stay eligible for your semester exams.',
    publishedDate: '2026-06-06',
    author: 'StudentToolkit Team',
    category: 'College Life',
    relatedTools: ['attendance-calculator'],
    content: `
      <h2>The Unwritten Law: The 75% Rule</h2>
      <p>In most Indian engineering and degree colleges affiliated with universities like VTU, Mumbai University, or Anna University, there is a strict mandate for 75% attendance. Falling below this threshold can lead to "detention" where you are not allowed to appear for the semester exams.</p>
      
      <h3>1. How to Calculate Your Current Percentage</h3>
      <p>The formula is simple: (Classes Attended / Total Classes Conducted) × 100. However, the calculation gets tricky when you want to plan for the future.</p>
      
      <h3>2. Understanding the Bunk Margin</h3>
      <p>Students often want to know: "How many more classes can I miss?" To stay safe, you must ensure that even after missing those classes, your total attendance remains above 75%.</p>
      
      <div class="my-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h4 class="text-primary font-bold mb-2">Planning a bunk?</h4>
        <p>Check the <a href="/tools/attendance-calculator" class="font-semibold underline">Attendance Calculator</a> to see exactly how many classes you can safely miss or how many you must attend to reach 75%.</p>
      </div>

      <h3>3. Why Attendance Matters</h3>
      <p>Apart from exam eligibility, many colleges allocate 5-10 'internal marks' based on attendance brackets. Maintaining 85%+ attendance often secures the highest bracket for these marks.</p>

      <h3>4. Tips for Keeping Attendance High</h3>
      <ul>
        <li>Prioritize labs; they usually have higher weightage and are conducted less frequently.</li>
        <li>Track your attendance weekly to avoid end-semester surprises.</li>
        <li>Keep medical certificates ready if you have legitimate health issues.</li>
      </ul>
    `
  },
  {
    slug: 'percentage-vs-cgpa-for-students',
    title: 'Percentage vs CGPA: What Students Should Know for Placements',
    excerpt: 'Differentiating between marks percentage, CGPA, and GPA, and how recruiters look at your academic scores.',
    publishedDate: '2026-06-07',
    author: 'StudentToolkit Team',
    category: 'Career',
    relatedTools: ['cgpa-calculator', 'percentage-calculator'],
    content: `
      <h2>CGPA or Percentage: Which One Matters?</h2>
      <p>In the Indian education system, you will frequently encounter both CGPA (Cumulative Grade Point Average) and Percentage. While your university might issue a CGPA, many job applications (like TCS, Infosys, or Government Exams) still ask for an aggregate percentage.</p>
      
      <h3>1. Defining the Terms</h3>
      <ul>
        <li><strong>Percentage:</strong> The ratio of total marks obtained to the maximum possible marks.</li>
        <li><strong>CGPA:</strong> A weighted average of grade points across all semesters.</li>
        <li><strong>Aggregate Percentage:</strong> The combined percentage calculated across all years of study, not just the final year.</li>
      </ul>
      
      <h3>2. The Conversion Confusion</h3>
      <p> Recruiters often use specific multipliers to convert CGPA to percentage if your university doesn't provide an official conversion. The most common multiplier in India is 9.5 (e.g., 8.0 CGPA = 76%). However, VTU students use (CGPA - 0.75) × 10.</p>

      <div class="my-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h4 class="text-primary font-bold mb-2">Quick Conversions</h4>
        <p>Use our <a href="/tools/percentage-calculator" class="font-semibold underline">Percentage Calculator</a> for marks-to-percent or our <a href="/tools/cgpa-calculator" class="font-semibold underline">CGPA Calculator</a> for official university conversions.</p>
      </div>

      <h3>3. Why Recruitment Portals Ask for Percentage</h3>
      <p>Recruitment algorithms find it easier to rank candidates using a normalized percentage scale (0-100) rather than varying CGPA scales (10-point vs 7-point vs 4-point).</p>

      <h3>4. Our Advice</h3>
      <p>Always maintain a copy of your university's 'Formula for Conversion of CGPA to Percentage'. You will need this during document verification for top-tier companies or higher studies (MS/MBA) applications.</p>
    `
  }
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
