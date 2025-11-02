import { Shield, Database, Globe, BarChart3, FileText, Upload, Layout, Workflow, Settings, Code } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: 'Dashboard & Analytics',
    description: 'Comprehensive dashboards with real-time analytics, metrics tracking, and customizable widgets to monitor your data.',
  },
  {
    icon: BarChart3,
    title: 'Charts & Reports',
    description: 'Built-in charting and reporting tools with multiple visualization types, export capabilities, and scheduled reports.',
  },
  {
    icon: Database,
    title: 'Resource Management',
    description: 'Complete CRUD interfaces with advanced data tables, filtering, sorting, and bulk operations for all your resources.',
  },
  {
    icon: Shield,
    title: 'Authentication & Auth',
    description: 'Secure authentication with multiple providers, magic links, MFA, and role-based access control (RBAC) out of the box.',
  },
  {
    icon: Upload,
    title: 'File Management',
    description: 'Integrated file upload, storage management, image optimization, and CDN integration for all your media needs.',
  },
  // {
  //   icon: FileText,
  //   title: 'Custom Forms',
  //   description: 'Dynamic form builder with validation, conditional logic, and auto-generated forms based on your database schema.',
  // },
  {
    icon: Workflow,
    title: 'API Integration',
    description: 'RESTful API endpoints automatically generated for all resources with authentication and rate limiting built-in.',
  },
  {
    icon: Globe,
    title: 'Internationalization',
    description: 'Multi-language support with automatic locale detection, comprehensive translation system, and RTL support.',
  },
  {
    icon: Settings,
    title: 'Customizable & Extensible',
    description: 'Highly customizable with plugin system, theming, custom hooks, and extensible architecture for your specific needs.',
  },
  {
    icon: Code,
    title: 'Open Source',
    description: 'Fully open source codebase with transparent development, active community, and regular updates.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Everything You Need, Built-In
              </h2>
              <p className="mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl leading-relaxed">
                A complete CMS platform with all the features and tools you need to build and manage
                modern applications. No need to piece together multiple solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const IconComponent = feature.icon;

              return (
                <div key={feature.title} className="space-y-3 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border bg-background">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
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