import { Star, Download, Users, Code } from 'lucide-react';

const stats = [
  {
    value: '10+',
    label: 'Built-in Features',
  },
  {
    value: '100%',
    label: 'Open Source',
  },
  {
    value: 'Active',
    label: 'Community',
  },
  {
    value: 'Free',
    label: 'Forever',
  },
];

export function StatsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border bg-card overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              {stats.map((stat) => {
                return (
                  <div key={stat.label} className="p-8 text-center">
                    <div className="text-4xl font-semibold text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
