const technologies = [
  {
    name: 'Next.js',
    logo: 'https://svgl.app/library/nextjs_icon_dark.svg',
  },
  {
    name: 'Supabase',
    logo: 'https://svgl.app/library/supabase.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://svgl.app/library/typescript.svg',
  },
  {
    name: 'Shadcn UI',
    logo: 'https://svgl.app/library/shadcn-ui.svg',
  },
];

export function Integrations() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border bg-card overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h3 className="text-sm font-semibold text-foreground">Built with modern technologies</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6">
            {technologies.map((tech) => {
              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center space-y-3"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-8 w-auto"
                  />
                  <h3 className="text-xs sm:text-sm font-medium text-foreground text-center">{tech.name}</h3>
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
