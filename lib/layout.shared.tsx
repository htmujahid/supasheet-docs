import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Grid2X2PlusIcon } from 'lucide-react';

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
        <>
          <Grid2X2PlusIcon className="inline h-4 w-4" />
          Supasheet
        </>
      ),
    },
    links: [],
  };
}
