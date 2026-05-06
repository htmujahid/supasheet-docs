import { ArrowRight, Code2, Zap } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border bg-card px-8 py-16 sm:px-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                Skip the internal tools backlog. Build the product.
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
                Try the live demo, clone the repo, or read the docs.
                Everything teams need to run internal operations on Supabase, open source, forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="https://0.supasheet.app/" target="_blank" rel="noreferrer">
                  <button className={buttonVariants({ variant: 'primary' }) + ' h-11 px-6 gap-2 w-full sm:w-auto rounded-2xl'}>
                    <Zap className="h-5 w-5" />
                    Try the live demo
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link href="https://github.com/htmujahid/supasheet" target="_blank" rel="noreferrer">
                  <button className={buttonVariants({ variant: 'outline' }) + ' h-11 px-6 gap-2 w-full sm:w-auto rounded-2xl'}>
                    <Code2 className="h-5 w-5" />
                    Clone on GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Open source · Self-hostable · No per-seat fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
