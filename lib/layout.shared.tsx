import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Grid2X2PlusIcon } from 'lucide-react';
import { siteConfig } from './config';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex w-fit items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          </svg>
          <span>Supasheet.</span>
        </div>
      ),
    },
    githubUrl: siteConfig.links.github,
    links: [],
  };
}
