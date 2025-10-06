import { Shield, Lock, Database, Globe, Github } from 'lucide-react';
import { cn } from 'fumadocs-ui/utils/cn';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Authentication',
    description: 'Secure user authentication with multiple providers, magic links, and multi-factor authentication support.',
    size: 'large',
    position: 'md:col-span-2',
  },
  {
    icon: Lock,
    title: 'Authorization (RBAC)',
    description: 'Role-based access control system with fine-grained permissions and user management.',
    size: 'medium',
    position: 'md:col-span-1',
  },
  {
    icon: Database,
    title: 'Resource Management',
    description: 'Complete CRUD interfaces with advanced data tables, filtering, and bulk operations.',
    size: 'medium',
    position: 'md:col-span-1',
  },
  {
    icon: Globe,
    title: 'Internationalization',
    description: 'Multi-language support with automatic locale detection and comprehensive translation system.',
    size: 'small',
    position: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: Github,
    title: 'Open Source',
    description: 'Fully open source codebase with transparent development and community contributions.',
    size: 'small',
    position: 'md:col-span-1 md:row-span-1',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Everything you need to build secure, scalable applications with modern best practices.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 mt-12">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            
            return (
              <Card key={feature.title} className={cn(feature.position, 'bg-sidebar shadow-none')}>
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}