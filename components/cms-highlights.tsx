import { CheckCircle2 } from 'lucide-react';

const highlights = [
  {
    title: 'Complete Admin Panel',
    description: 'Full-featured admin interface with user management, permissions, and comprehensive data tables.',
  },
  {
    title: 'Advanced Dashboards',
    description: 'Real-time analytics dashboards with customizable widgets and interactive data visualizations.',
  },
  {
    title: 'Report Generation',
    description: 'Create, customize, and schedule reports with multiple export formats (PDF, CSV, Excel).',
  },
  {
    title: 'Chart Builder',
    description: 'Build beautiful charts and graphs with your data using multiple visualization types.',
  },
  {
    title: 'Form Builder',
    description: 'Dynamic form creation with validation, conditional logic, and auto-save functionality.',
  },
  {
    title: 'File Storage',
    description: 'Integrated file and media management with upload, organization, and CDN delivery.',
  },
  {
    title: 'API Generation',
    description: 'Automatically generated REST APIs for all your resources with built-in authentication.',
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks with customizable workflows and triggers.',
  },
];

export function CMSHighlights() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  More Than Just an Admin Panel
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Supasheet is an opinionated, complete CMS solution that gives you everything
                  you need to build and manage modern applications on top of Supabase.
                  No assembly required.
                </p>
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-base text-muted-foreground">
                  While other solutions give you basic CRUD operations, Supasheet provides
                  a comprehensive platform with dashboards, analytics, reports, charts,
                  file management, and much more—all working together seamlessly.
                </p>
                <p className="text-base text-muted-foreground">
                  Built with best practices in mind, featuring a modern tech stack,
                  and designed to scale with your needs.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-1 text-left">
                      <h3 className="font-semibold text-base leading-tight">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
