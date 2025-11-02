import { Clock, Blocks, Sparkles, Heart } from 'lucide-react';

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
];

export function WhyChoose() {
  return (
    <section className="py-16 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Why Choose Supasheet?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Building admin panels and internal tools is time-consuming and repetitive.
                Supasheet gives you a complete, production-ready CMS so you can focus on
                what makes your product unique.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-base leading-relaxed">
                    <strong>No vendor lock-in</strong> - Built on open source Supabase, deploy anywhere
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-base leading-relaxed">
                    <strong>Fully customizable</strong> - Extend and modify everything to match your needs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-base leading-relaxed">
                    <strong>Production ready</strong> - Security, performance, and best practices built-in
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {reasons.map((reason) => {
                const IconComponent = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1 text-left">
                      <h3 className="font-semibold text-lg">{reason.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
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
