import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';

const steps = [
  {
    number: '01',
    title: 'Clone & Install',
    description: 'Clone the repository and install dependencies with your favorite package manager.',
    code: 'git clone https://github.com/supasheet/supasheet.git',
  },
  {
    number: '02',
    title: 'Configure Supabase',
    description: 'Add your Supabase connection details to the environment variables.',
    code: 'SUPABASE_URL=your-project-url; SUPABASE_ANON_KEY=your-anon-key;',
  },
  {
    number: '03',
    title: 'Start Building',
    description: 'Launch the development server and start customizing for your needs.',
    code: 'pnpm dev',
  },
];

export function GettingStarted() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get Started in Minutes
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl leading-relaxed">
              Start building with Supasheet in three simple steps. No complex setup or configuration needed.
            </p>
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative grid gap-6 md:grid-cols-[1fr_2fr] items-center"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="rounded-lg border bg-muted/50 p-4">
                  <code className="text-sm font-mono">{step.code}</code>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 h-full w-px bg-border md:hidden" />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-12">
            <Link href="/docs">
              <button className={buttonVariants({ variant: 'primary' }) + ' gap-2'}>
                Read Documentation
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="https://demo.supasheet.app/" target="_blank" rel="noreferrer">
              <button className={buttonVariants({ variant: 'outline' })}>
                View Live Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
