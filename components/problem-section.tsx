import { RotateCw, CreditCard, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: RotateCw,
    title: 'Building internal tools is repetitive',
    description: 'Every CRUD screen is the same — list, detail, form, delete. Yet every team rebuilds them from scratch for every project.',
  },
  {
    icon: CreditCard,
    title: 'Low-code platforms are a per-seat tax',
    description: 'Retool, Forest, and friends charge per-seat forever. The bill scales with your team, and you don\'t own the code that runs your ops.',
  },
  {
    icon: AlertTriangle,
    title: 'Rolling your own auth + RBAC is risky',
    description: 'Permission systems are easy to get wrong. Bugs leak data, audits find gaps, and incident reports get written at 3am.',
  },
];

export function ProblemSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Internal tools shouldn&apos;t take weeks.
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Yet every team keeps rebuilding the same CRUD, dashboards, and permission plumbing.
              Supasheet ships the whole layer — once, open source, on your Supabase.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem) => {
              const IconComponent = problem.icon;
              return (
                <div
                  key={problem.title}
                  className="rounded-xl border bg-card text-card-foreground p-6 text-left"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 border mb-4">
                    <IconComponent className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
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
