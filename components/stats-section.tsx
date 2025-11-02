import { Star, Download, Users, Code } from 'lucide-react';

const stats = [
  {
    icon: Star,
    value: '10+',
    label: 'Built-in Features',
    description: 'Everything you need',
  },
  {
    icon: Code,
    value: '100%',
    label: 'Open Source',
    description: 'Fully transparent',
  },
  {
    icon: Users,
    value: 'Active',
    label: 'Community',
    description: 'Growing daily',
  },
  {
    icon: Download,
    value: 'Free',
    label: 'Forever',
    description: 'No hidden costs',
  },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border bg-background">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm font-semibold">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
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
