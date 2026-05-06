import { Shield, Database, BarChart3, Upload, Layout, Lock, ClipboardList, Users } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Auto-generated CRUD',
    description: 'Add a table, get list, detail, create, and edit screens automatically. Field types are detected from your schema and rendered with the right input.',
  },
  {
    icon: Layout,
    title: 'Multiple data views',
    description: 'View the same data as grid, kanban, calendar, gallery, or list. Drag tasks across kanban columns, schedule on calendars, browse galleries, switch with a click.',
  },
  {
    icon: Shield,
    title: 'Built-in authentication',
    description: 'Sign-in, sign-up, OAuth (Google + GitHub), TOTP-based MFA, password reset, and identity linking, wired to Supabase Auth out of the box.',
  },
  {
    icon: Lock,
    title: 'Fine-grained RBAC',
    description: 'Role-permission matrix enforced by Postgres RLS. The UI gates the same way for UX, but security is enforced at the database, even leaked client keys can\'t bypass it.',
  },
  {
    icon: Layout,
    title: 'Configurable dashboards',
    description: 'KPI cards, metric tiles with sparklines, mini-tables, and chart widgets. Mark a view as a dashboard widget, it shows up. Per-widget permission gating included.',
  },
  {
    icon: BarChart3,
    title: 'Five chart types',
    description: 'Area, bar, line, pie, and radar, auto-rendered from your views. Use them inside dashboards or as standalone analytics pages. No JavaScript required.',
  },
  {
    icon: Upload,
    title: 'File storage',
    description: 'Drag-and-drop uploads, folder navigation, inline image and PDF preview. Permission-controlled buckets with dynamic upload paths that respect your RBAC.',
  },
  {
    icon: ClipboardList,
    title: 'Audit logs',
    description: 'Every INSERT, UPDATE, and DELETE captured by Postgres triggers. Old data, new data, changed fields, user, role, timestamp, compliance-ready out of the box.',
  },
  {
    icon: Users,
    title: 'User management',
    description: 'Create, invite, edit, and delete users via Supabase\'s Admin API behind permission checks. Invite by magic link, manage roles, view per-user audit history.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                Everything internal ops needs, built-in
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
                Stop stitching together libraries and SaaS tools. Supasheet ships the full stack,
                CRUD, auth, RBAC, dashboards, files, and audit, as one open-source app.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const IconComponent = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-xl border shadow-sm bg-card text-card-foreground p-6 pt-6"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border">
                      <IconComponent className="h-4 w-4 text-foreground" />
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-medium text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
