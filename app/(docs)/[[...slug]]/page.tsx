import { getPageImage, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { baseOptions } from '@/lib/layout.shared';
import { siteConfig } from '@/lib/config';
import { HomePage } from '@/components/home-page';

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const params = await props.params;

  // `/` (no slug) renders the marketing homepage instead of a doc page.
  // Handled here (rather than a separate `app/(home)/page.tsx`) because this
  // route is an optional catch-all that already matches `/` — a sibling page
  // at the same URL would be a duplicate-route build error.
  if (!params.slug || params.slug.length === 0) {
    return <HomePage />;
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsLayout githubUrl={siteConfig.links.github} tree={source.pageTree} {...baseOptions()}>
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;

  // Let the root layout's default metadata (siteConfig-based) apply to `/`.
  if (!params.slug || params.slug.length === 0) {
    return {};
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
