import { Briefcase, ShoppingCart, Users, FileStack } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const useCases = [
  {
    icon: Briefcase,
    title: 'Internal Tools',
    description: 'Build powerful internal dashboards and admin panels for your team. Manage operations, view analytics, and control your business data from one place.',
    examples: ['Employee management', 'Inventory systems', 'Order processing', 'Data analytics'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Backend',
    description: 'Complete backend management for online stores. Handle products, orders, customers, and inventory with built-in reporting and analytics.',
    examples: ['Product catalog', 'Order management', 'Customer data', 'Sales reports'],
  },
  {
    icon: Users,
    title: 'Customer Portals',
    description: 'Create secure customer-facing portals with authentication, data access, and self-service capabilities built right in.',
    examples: ['User profiles', 'Account management', 'Support tickets', 'Document access'],
  },
  {
    icon: FileStack,
    title: 'Content Management',
    description: 'Manage content, media, and digital assets with a full-featured CMS. Perfect for blogs, documentation, and marketing sites.',
    examples: ['Blog posts', 'Media library', 'Page builder', 'SEO management'],
  },
];

export function UseCases() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built for Any Use Case
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl leading-relaxed">
              Whether you're building internal tools, customer portals, or content platforms,
              Supasheet provides everything you need out of the box.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase) => {
              const IconComponent = useCase.icon;
              return (
                <Card key={useCase.title} className="border text-center">
                  <CardHeader className="space-y-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border bg-background">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {useCase.examples.map((example) => (
                        <span
                          key={example}
                          className="text-xs px-3 py-1 rounded-full border bg-muted/50"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
