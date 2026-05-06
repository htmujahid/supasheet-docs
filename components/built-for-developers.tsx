import { Type, FileJson, GitFork } from 'lucide-react';

const pillars = [
  {
    icon: Type,
    title: 'Type-safe end to end',
    description: 'Routes, queries, forms, and the database are typed. Refactor without fear, TypeScript catches breakage at compile time.',
  },
  {
    icon: FileJson,
    title: 'Metadata-driven, not drag-drop',
    description: 'Configure UI through JSON in Postgres comments. Lives next to the data, versioned with your migrations, no separate config service.',
  },
  {
    icon: GitFork,
    title: 'You own the code',
    description: 'It\'s a React app. Fork it. Brand it. Embed it. No SaaS escape velocity to plan for. No per-seat tax forever.',
  },
];

const codeSnippet = `function DealsPage() {
  const { schema, resource } = Route.useParams();
  const canEdit = useHasPermission(\`\${schema}.\${resource}:update\`);

  const { data } = useSuspenseQuery(
    resourceDataQueryOptions(schema, resource, search)
  );

  return <ResourceTable data={data} editable={canEdit} />;
}`;

export function BuiltForDevelopers() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Designed for people who actually ship
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              No drag-and-drop UI builder. No proprietary DSL. Just a typed React app that
              reads your Supabase schema and renders the screens your team needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center text-left">
            <div className="space-y-6">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-foreground">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border bg-zinc-950 dark:bg-zinc-950 p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-zinc-50 text-left whitespace-pre">
                <code className="block">{codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
