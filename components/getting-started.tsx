import { ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';

const steps = [
  {
    title: 'Clone the repository',
    code: '$ git clone https://github.com/htmujahid/supasheet.git\n$ cd supasheet\n$ npm install',
  },
  {
    title: 'Configure environment variables',
    code: '# Update .env file with your Supabase credentials\nSUPABASE_URL=your-project-url\nSUPABASE_ANON_KEY=your-anon-key',
  },
  {
    title: 'Start the development server',
    code: '$ npm run dev\n\n> supasheet@1.0.0 dev\n> next dev\n\n  ▲ Next.js 16.0.0\n  - Local:        http://localhost:3000',
  },
];

export function GettingStarted() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-foreground">
              Get Started in Minutes
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Start building with Supasheet in three simple steps. No complex setup or configuration needed.
            </p>
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Terminal className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <div className="rounded-2xl border bg-zinc-950 dark:bg-zinc-950 p-6 overflow-x-auto">
                  <pre className="text-sm font-mono text-zinc-50 text-left whitespace-pre">
                    <code className="block">{step.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
            <Link href="/docs">
              <button className={buttonVariants({ variant: 'primary' }) + ' gap-2 rounded-2xl h-11 px-6'}>
                Read Documentation
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="https://demo.supasheet.app/" target="_blank" rel="noreferrer">
              <button className={buttonVariants({ variant: 'outline' }) + ' rounded-2xl h-11 px-6'}>
                View Live Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
