import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need to know React to use Supasheet?',
    a: 'For everyday CRUD use, you only write SQL, Supasheet generates the screens automatically. To customize components or add bespoke routes, basic React helps.',
  },
  {
    q: 'Does it work with my existing Supabase project?',
    a: 'Yes. Run the migrations from supabase/migrations/, point Supasheet at your project URL and anon key, and your tables show up as managed resources.',
  },
  {
    q: 'Can I customize the look and feel?',
    a: 'Yes. It\'s a standard React + Tailwind + shadcn/ui app. Override CSS variables for theme colors, swap components, or fork it entirely, you own the code.',
  },
  {
    q: 'How does authentication work?',
    a: 'Supabase Auth handles sessions. Supasheet ships sign-in, sign-up, OAuth (Google, GitHub), MFA (TOTP), password reset, and identity linking out of the box.',
  },
  {
    q: 'How are permissions enforced?',
    a: 'Roles and permissions live in supasheet.role_permissions. Every table\'s RLS policy checks supasheet.has_permission(\'schema.table:action\'). The UI gates the same way for UX, but the database is the source of truth, even leaked client keys can\'t bypass it.',
  },
  {
    q: 'Can I add custom views or routes?',
    a: 'Yes. It uses TanStack Router with file-based routing, drop a .tsx file in src/routes/ and it\'s a route. All the data, auth, and permission hooks are reusable.',
  },
  {
    q: 'Does it support multiple schemas / multi-tenancy?',
    a: 'Yes. Routes are scoped under /$schema/. Use Postgres schemas as logical tenants, or as one schema per module (CRM, HR, finance, etc.).',
  },
  {
    q: 'Is there a hosted version?',
    a: 'The demo at 0.supasheet.app is hosted by the project. For production, self-host the React app and point it at Supabase Cloud or self-hosted Supabase.',
  },
  {
    q: 'What does it cost?',
    a: 'Supasheet itself is open-source and free. You only pay for the infrastructure you run, your Supabase project and wherever you host the React app.',
  },
];

export function FAQSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              Questions, answered
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Everything teams typically ask before building their internal ops on Supasheet.
            </p>
          </div>
          <div className="rounded-xl border bg-card divide-y text-left">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-medium text-foreground text-base">{faq.q}</h3>
                  <Plus className="h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-45" />
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
