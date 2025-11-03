import { Clock, Blocks, Sparkles, Heart, Shield, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Save Weeks of Development',
    description: 'Stop building the same admin features from scratch. Get authentication, dashboards, charts, reports, and data management ready to use.',
  },
  {
    icon: Blocks,
    title: 'Everything Integrated',
    description: 'No more piecing together libraries and tools. Everything works together seamlessly - from auth to analytics to file storage.',
  },
  {
    icon: Sparkles,
    title: 'Opinionated & Complete',
    description: 'We made the hard decisions for you. Best practices, modern stack, and production-ready patterns built-in from day one.',
  },
  {
    icon: Heart,
    title: 'Built for Supabase',
    description: 'Designed specifically for Supabase. Leverages its full power while adding the features and UI you need for complete applications.',
  },
  {
    icon: Shield,
    title: 'Production Ready',
    description: 'Security, performance, and best practices built-in. Deploy with confidence knowing your app is enterprise-grade.',
  },
  {
    icon: Zap,
    title: 'No Vendor Lock-in',
    description: 'Built on open source Supabase, deploy anywhere. Full control over your data and infrastructure.',
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
