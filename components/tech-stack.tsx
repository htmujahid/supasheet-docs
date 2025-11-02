import { Code2, Zap, Shield, Boxes } from 'lucide-react';

const techFeatures = [
  {
    icon: Code2,
    title: 'Modern Stack',
    description: 'Built with Next.js, React, TypeScript, and Tailwind CSS for a fast, type-safe development experience.',
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Connect to your Supabase instance and start managing data immediately. No complex configuration needed.',
  },
  {
    icon: Shield,
    title: 'Production Ready',
    description: 'Enterprise-grade security, authentication, and authorization built-in. Deploy with confidence.',
  },
  {
    icon: Boxes,
    title: 'Fully Customizable',
    description: 'Extend and customize every aspect with hooks, plugins, themes, and a well-documented API.',
  },
];

export function TechStack() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for Developers
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed">
              An opinionated architecture with modern tools and best practices,
              designed to help you ship faster.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {techFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="space-y-3 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border bg-background">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
