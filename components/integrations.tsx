import { Database, Zap, Boxes, Code2, Palette, Lock, FileCode2, Sparkles } from 'lucide-react';

const technologies = [
  {
    icon: Zap,
    name: 'Next.js',
    description: 'React framework for production',
  },
  {
    icon: Code2,
    name: 'TypeScript',
    description: 'Type-safe development',
  },
  {
    icon: Database,
    name: 'Supabase',
    description: 'Database & authentication',
  },
  {
    icon: Palette,
    name: 'Tailwind CSS',
    description: 'Utility-first styling',
  },
  {
    icon: Boxes,
    name: 'Shadcn UI',
    description: 'Component library',
  },
  {
    icon: Lock,
    name: 'NextAuth',
    description: 'Secure authentication',
  },
  {
    icon: FileCode2,
    name: 'React Hook Form',
    description: 'Form management',
  },
  {
    icon: Sparkles,
    name: 'Recharts',
    description: 'Data visualization',
  },
];

export function Integrations() {
  return (
    <section className="py-16 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Powered by Modern Technologies
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed">
              Built on top of industry-leading tools and frameworks to ensure reliability,
              performance, and developer experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center text-center space-y-3 p-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border bg-background">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-base">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              And many more tools and libraries working together seamlessly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
