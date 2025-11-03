import { Shield, Database, BarChart3, FileText, Upload, Layout } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: 'Dashboard',
    description: 'Comprehensive dashboards with analytics and customizable widgets to monitor your data.',
  },
  {
    icon: BarChart3,
    title: 'Charts',
    description: 'Built-in charting tools with multiple visualization types and export capabilities.',
  },
  {
    icon: FileText,
    title: 'Reports',
    description: 'Generate detailed reports with scheduling and multiple export formats.',
  },
  {
    icon: Database,
    title: 'Resource Management',
    description: 'CRUD operations with RBAC. Advanced filtering, sorting, and data export capabilities.',
  },
  {
    icon: Shield,
    title: 'Authentication & Authorization',
    description: 'Secure authentication with multiple providers, MFA, role-based access control, and audit logs.',
  },
  {
    icon: Upload,
    title: 'File Management',
    description: 'Integrated file upload, storage management, and CDN integration for media.',
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
                Everything You Need, Built-In
              </h2>
              <p className="mx-auto max-w-3xl text-muted-foreground text-lg leading-relaxed">
                A complete CMS platform with all the features and tools you need to build and manage
                modern applications. No need to piece together multiple solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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