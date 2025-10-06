import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { siteConfig } from '@/lib/config';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout githubUrl={siteConfig.links.github} tree={source.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
