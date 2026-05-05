import { ArrowRight, Database, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';

const steps = [
  {
    icon: Database,
    title: 'Define your schema',
    description: 'Add a table in Supabase. Configure how it shows up in the UI through a JSON metadata block on the table comment — no separate config service.',
    code: `CREATE TABLE crm.deals (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  stage crm.deal_stage NOT NULL,
  amount numeric,
  close_date date,
  owner_id uuid REFERENCES auth.users
);

COMMENT ON TABLE crm.deals IS '{
  "items": [
    { "id": "kanban", "type": "kanban", "group": "stage" },
    { "id": "calendar", "type": "calendar", "date": "close_date" }
  ]
}';`,
  },
  {
    icon: ShieldCheck,
    title: 'Grant permissions',
    description: 'Map roles to permissions in supasheet.role_permissions. RLS policies enforce them at the database — the UI just respects what the DB allows.',
    code: `INSERT INTO supasheet.role_permissions (role, permission) VALUES
  ('admin',  'crm.deals:select'),
  ('admin',  'crm.deals:insert'),
  ('admin',  'crm.deals:update'),
  ('admin',  'crm.deals:delete'),
  ('member', 'crm.deals:select');`,
  },
  {
    icon: Sparkles,
    title: 'That\'s it.',
    description: 'List, detail, create, edit, kanban, and calendar screens are live. Dashboard widgets and charts are one comment away. No UI code required.',
    code: `# Run the React app against your Supabase project
$ git clone https://github.com/htmujahid/supasheet.git
$ cd supasheet && npm install

# Point at your project
$ echo "VITE_SUPABASE_URL=..."        >  .env
$ echo "VITE_SUPABASE_ANON_KEY=..."   >> .env

$ npm run dev
  → http://localhost:5173`,
  },
];

export function GettingStarted() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              From SQL to a working ops app in three steps
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Define a table, grant permissions, point Supasheet at your project. Every screen
              your team needs is generated from your schema.
            </p>
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        <span className="text-muted-foreground mr-2">Step {index + 1}.</span>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                    {step.description}
                  </p>
                  <div className="rounded-2xl border bg-zinc-950 dark:bg-zinc-950 p-6 overflow-x-auto">
                    <pre className="text-sm font-mono text-zinc-50 text-left whitespace-pre">
                      <code className="block">{step.code}</code>
                    </pre>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
            <Link href="/docs">
              <button className={buttonVariants({ variant: 'primary' }) + ' gap-2 rounded-2xl h-11 px-6'}>
                Read the docs
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="https://0.supasheet.app/" target="_blank" rel="noreferrer">
              <button className={buttonVariants({ variant: 'outline' }) + ' rounded-2xl h-11 px-6'}>
                View live demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
