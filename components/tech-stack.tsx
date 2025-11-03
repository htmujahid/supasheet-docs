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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border shadow-sm bg-card text-card-foreground divide-y lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-4">
            {techFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="p-6">
                  <div className="mx-auto size-8 rounded-md bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center">
                    <IconComponent className="size-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mt-4">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
