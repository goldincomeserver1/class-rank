import RankCalculator from '@/components/calculator'
import { GraduationCap, Trophy, Target, Brain, Star, HelpCircle } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 py-12 mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Class Rank Calculator
          </h1>
        </div>

        {/* Introduction Card */}
        <div className="bg-card/50 backdrop-blur p-6 rounded-xl shadow-lg mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              Understanding your class rank is crucial for academic planning and college applications. Our Class Rank Calculator transforms your numerical rank into meaningful percentiles and quartiles, giving you clear insights into your academic standing. Whether you're preparing for college applications or tracking your academic progress, this tool provides instant, accurate results.
            </p>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our free Class Rank Calculator was created to help you easily figure out your academic standing.
          </p>
        </div>

        {/* Calculator */}
        <div className="flex justify-center mb-16">
          <RankCalculator />
        </div>

        {/* How to Use & Understanding Results */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold m-0">How to Use Our Class Rank Calculator</h2>
            </div>
            <ol className="space-y-2">
              <li>Enter your position in class</li>
              <li>Input total number of students</li>
              <li>Click "Calculate Rank"</li>
              <li>Get instant percentile & quartile results</li>
            </ol>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold m-0">Understanding Results</h2>
            </div>
            <ul className="space-y-2">
              <li><strong>Percentile:</strong> Shows your standing relative to peers</li>
              <li><strong>Quartile:</strong> Places you in one of four ranking groups</li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-card p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">Benefits of Class Rank Calculator</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">College Application Support</h3>
                <p className="text-muted-foreground">Accurately present your academic standing in college applications with precise percentile rankings.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Academic Goal Setting</h3>
                <p className="text-muted-foreground">Set realistic academic goals by understanding your current position in class.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Progress Tracking</h3>
                <p className="text-muted-foreground">Monitor your academic progress over time by comparing your percentile changes.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Scholarship Opportunities</h3>
                <p className="text-muted-foreground">Identify scholarship opportunities that match your academic standing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-card p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">
              Percentile vs. Quartile
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-border rounded-xl">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Metric</th>
                  <th className="px-6 py-3 text-left font-semibold">Definition</th>
                  <th className="px-6 py-3 text-left font-semibold">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-primary/5">
                  <td className="px-6 py-4 font-semibold">Percentile</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    The % of classmates you outperformed.
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Helps show relative performance at a glance.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Quartile</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Divides class into 4 equal performance groups.
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Commonly used by schools and scholarships.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-card p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">What Students Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground italic mb-4">
                "This calculator helped me instantly know my percentile for
                college apps. Super easy!"
              </p>
              <p className="font-semibold">— Sarah, High School Senior</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground italic mb-4">
                "Our counselor recommended it. Now I track my rank every
                semester."
              </p>
              <p className="font-semibold">— David, Junior Student</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground italic mb-4">
                "A must-have tool if you're preparing for scholarships."
              </p>
              <p className="font-semibold">— Priya, College Applicant</p>
            </div>
          </div>
        </div>

        {/* Tips for Success */}
        <div className="bg-card p-6 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">Tips for Success</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li>Study consistently</li>
              <li>Participate in class</li>
              <li>Take detailed notes</li>
              <li>Form study groups</li>
            </ul>
            <ul className="space-y-2">
              <li>Ask questions when needed</li>
              <li>Review material regularly</li>
              <li>Stay organized</li>
              <li>Seek help early</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-card p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What is a class rank calculator?</h3>
              <p className="text-muted-foreground">A class rank calculator shows what percentage of students in your class you performed better than. For example, if you're in the 90th percentile, you performed better than 90% of your classmates.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How is the quartile calculated?</h3>
              <p className="text-muted-foreground">Quartiles divide the class into four equal groups. Quartile 1 represents the top 25% of the class, Quartile 2 represents 50-75%, Quartile 3 represents 25-50%, and Quartile 4 represents the bottom 25%.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Why is class rank important for college applications?</h3>
              <p className="text-muted-foreground">Class rank helps colleges compare students from different schools by showing how well you performed relative to your peers. Many colleges use this information in their admissions decisions.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How often should I check my class rank?</h3>
              <p className="text-muted-foreground">It's good to check your class rank at the end of each semester or marking period to track your progress and adjust your academic strategies if needed.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Can I improve my class rank?</h3>
              <p className="text-muted-foreground">Yes! You can improve your class rank by maintaining good study habits, participating in class, completing all assignments, and seeking help when needed. Our tips section above provides more detailed strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}