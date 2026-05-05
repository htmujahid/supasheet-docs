import { Briefcase, ShoppingCart, Users, GraduationCap, FileText, BarChart3 } from 'lucide-react';

const useCases = [
  {
    icon: Briefcase,
    title: 'Project & task management',
    description: 'Run sprints, track tickets, and ship work. Kanban boards, calendars, and dashboards wired to your tasks table.',
    examples: ['Kanban pipelines', 'Timesheets', 'Team dashboards', 'Status reports'],
  },
  {
    icon: Users,
    title: 'CRM & sales pipeline',
    description: 'Manage deals, contacts, and accounts without per-seat fees. Drag deals through stages, track activity, run pipeline reports.',
    examples: ['Deal stages', 'Contact directory', 'Activity logs', 'Sales charts'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce ops',
    description: 'Run the back-office for a store: products, orders, customers, and reviews. Rich-text descriptions and image galleries included.',
    examples: ['Product catalog', 'Order management', 'Customer records', 'Inventory'],
  },
  {
    icon: BarChart3,
    title: 'HR & people ops',
    description: 'Employee records, leave requests, performance cycles. Permission-gated by role so HR sees what HR should see.',
    examples: ['Employee directory', 'Leave tracker', 'Performance reviews', 'Org charts'],
  },
  {
    icon: FileText,
    title: 'Finance & inventory',
    description: 'Invoicing, budgets, procurement, manufacturing, and quality control — all driven by the same metadata model.',
    examples: ['Invoices', 'Budgets', 'Procurement', 'Quality logs'],
  },
  {
    icon: GraduationCap,
    title: 'LMS & content',
    description: 'Courses, enrollments, lessons, and certificates. Author with rich text, track progress, gate by role.',
    examples: ['Courses', 'Enrollments', 'Progress', 'Certificates'],
  },
];

export function UseCases() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              What teams build with Supasheet
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Eleven pre-built example schemas ship with the repo — clone one, run the migrations,
              and start operating. Or wire up your own and Supasheet renders the UI for free.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => {
              const IconComponent = useCase.icon;
              return (
                <div
                  key={useCase.title}
                  className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 text-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 border mb-4 mx-auto">
                    <IconComponent className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-medium text-foreground">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                  <div className="border-t border-dashed mt-4 pt-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {useCase.examples.map((example) => (
                        <span
                          key={example}
                          className="text-xs px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
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
