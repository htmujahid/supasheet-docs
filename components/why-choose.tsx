import { Clock, Blocks, Sparkles, Heart, Shield, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Internal tools shouldn\'t take weeks',
    description: 'Stop rebuilding the same CRUD, auth, and dashboards every project. Define a table, get a working ops screen, nothing to glue together.',
  },
  {
    icon: Blocks,
    title: 'Everything in one app',
    description: 'CRUD, multiple views, auth, RBAC, dashboards, charts, file storage, and audit logs. One open-source app, not seven SaaS subscriptions.',
  },
  {
    icon: Shield,
    title: 'RBAC enforced by the database',
    description: 'Permissions live in Postgres. Every table has RLS policies that check the role-permission matrix, even a leaked client key can\'t bypass it.',
  },
  {
    icon: Heart,
    title: 'Built natively on Supabase',
    description: 'Auth, storage, edge functions, realtime, all leveraged. Run on Supabase Cloud or self-host with the open-source stack.',
  },
  {
    icon: Sparkles,
    title: 'Type-safe end to end',
    description: 'Routes, queries, forms, and the database schema are all typed. Refactor without fear, TypeScript catches breakage before runtime does.',
  },
  {
    icon: Zap,
    title: 'You own the React code',
    description: 'It\'s a React app. Fork it, brand it, embed it. No per-seat tax. No vendor lock-in. No SaaS escape velocity to plan for.',
  },
];

export function WhyChoose() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Why Supasheet?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Six reasons teams pick Supasheet over rolling their own admin panel
              or paying per-seat for a low-code tool.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="rounded-xl border bg-card text-card-foreground p-6 text-left"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 border mb-4">
                    <IconComponent className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
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
