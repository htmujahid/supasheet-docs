import { Code2, Type, Database, Boxes } from 'lucide-react';

const techFeatures = [
  {
    icon: Code2,
    title: 'React 19 + TanStack',
    description: 'Built on React 19, TanStack Router/Query/Form/Table, and Tailwind v4. File-based routing, smart caching, and headless components throughout.',
  },
  {
    icon: Database,
    title: 'Supabase-native',
    description: 'Auth, Storage, Edge Functions, and Postgres, Supasheet leans on Supabase end-to-end. Run on Supabase Cloud or self-hosted.',
  },
  {
    icon: Type,
    title: 'Type-safe end to end',
    description: 'Routes, queries, forms, and the database are all typed. Refactor with confidence; TypeScript catches breakage at compile time.',
  },
  {
    icon: Boxes,
    title: 'You own the components',
    description: 'shadcn/ui (Base UI variant), Lexical for rich text, Recharts for charts, dnd-kit for drag-and-drop. Headless, accessible, fork-friendly.',
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
