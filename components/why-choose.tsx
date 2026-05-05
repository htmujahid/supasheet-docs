import { Clock, Blocks, Sparkles, Heart, Shield, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Internal tools shouldn\'t take weeks',
    description: 'Stop rebuilding the same CRUD, auth, and dashboards every project. Define a table, get a working ops screen — nothing to glue together.',
  },
  {
    icon: Blocks,
    title: 'Everything in one app',
    description: 'CRUD, multiple views, auth, RBAC, dashboards, charts, file storage, and audit logs. One open-source app, not seven SaaS subscriptions.',
  },
  {
    icon: Shield,
    title: 'RBAC enforced by the database',
    description: 'Permissions live in Postgres. Every table has RLS policies that check the role-permission matrix — even a leaked client key can\'t bypass it.',
  },
  {
    icon: Heart,
    title: 'Built natively on Supabase',
    description: 'Auth, storage, edge functions, realtime — all leveraged. Run on Supabase Cloud or self-host with the open-source stack.',
  },
  {
    icon: Sparkles,
    title: 'Type-safe end to end',
    description: 'Routes, queries, forms, and the database schema are all typed. Refactor without fear — TypeScript catches breakage before runtime does.',
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
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Why Supasheet?</h2>
          </div>
          <div className="border-t pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason) => {
                const IconComponent = reason.icon;
                return (
                  <div key={reason.title} className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <div className="*:size-4 flex-shrink-0">
                        <IconComponent className="text-foreground fill-foreground/10" />
                      </div>
                      <h3 className="font-medium text-foreground text-sm sm:text-base">{reason.title}</h3>
                    </div>
                    <p className="text-sm text-left text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
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
