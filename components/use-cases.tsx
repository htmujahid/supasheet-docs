import { Briefcase, ShoppingCart, Users, LayoutDashboard } from 'lucide-react';

const useCases = [
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Complete backend management for online stores. Handle products, orders, customers, and inventory with built-in reporting and analytics.',
    examples: ['Product catalog', 'Order management', 'Customer data', 'Sales reports'],
  },
  {
    icon: LayoutDashboard,
    title: 'Personal Dashboard',
    description: 'Create customized personal dashboards to track metrics, manage tasks, and visualize your data in one unified interface.',
    examples: ['Activity tracking', 'Goal management', 'Data visualization', 'Personal analytics'],
  },
  {
    icon: Users,
    title: 'CRM',
    description: 'Build customer relationship management systems with contact management, sales pipelines, and communication tracking.',
    examples: ['Contact management', 'Sales pipeline', 'Lead tracking', 'Customer insights'],
  },
  {
    icon: Briefcase,
    title: 'Internal Tools',
    description: 'Build powerful internal dashboards and admin panels for your team. Manage operations, view analytics, and control your business data.',
    examples: ['Employee management', 'Inventory systems', 'Order processing', 'Data analytics'],
  },
];

export function UseCases() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl text-foreground">
              Built for Any Use Case
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground text-base sm:text-lg leading-relaxed">
              Whether you&quot;re building internal tools, customer portals, or content platforms,
              Supasheet provides everything you need out of the box.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((useCase) => {
              const IconComponent = useCase.icon;
              return (
                <div
                  key={useCase.title}
                  className="bg-card text-card-foreground rounded-xl border shadow-sm p-6"
                >
                  <div className="*:size-6">
                    <IconComponent className="text-primary mx-auto" />
                  </div>
                  <div className="space-y-2 py-3">
                    <h3 className="text-base font-medium text-foreground">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                  <div className="border-t border-dashed pt-4">
                    <div className="flex flex-wrap gap-2">
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
