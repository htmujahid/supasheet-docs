# Supasheet Documentation

Official documentation for [Supasheet](https://github.com/htmujahid/supasheet) - a SQL-based admin panel and CMS built on top of Supabase.

## About Supasheet

Supasheet is a powerful, code-first admin panel where you primarily write SQL to define your entire application. It leverages Supabase's core features (PostgREST, Auth, Storage, RLS) and automatically generates UI based on your database schema.

### Key Features

- **CRUD Operations** - Define tables and views in SQL, get automatic UI
- **Authentication & Authorization** - Supabase Auth + PostgreSQL RLS
- **Charts & Dashboards** - Visualizations using SQL views
- **Reports** - Generate reports from SQL queries
- **Audit Logs** - Automatic change tracking with PostgreSQL triggers
- **Storage Management** - File upload/management with Supabase Storage
- **SQL Editor** - Built-in database management

## Development

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Documentation Structure

The documentation is organized into three main sections:

### 📚 Guide (`/docs/guide`)
Learn how to use Supasheet as a framework:
- Installation & Quickstart
- SQL-First Philosophy
- CRUD Operations
- Database Schema & Data Types
- Authorization with RLS
- Charts, Dashboards & Reports
- Audit Logs & User Management
- Storage & SQL Editor
- Complete Examples

### 🚀 Self-Host (`/docs/self-host`)
Deploy Supasheet on your own infrastructure:
- Prerequisites
- Database Setup
- Deployment Options
- Internationalization

## Project Structure

- `content/docs/` - MDX documentation files
- `lib/source.ts` - Content source adapter using Fumadocs
- `lib/layout.shared.tsx` - Shared layout configuration
- `app/(home)` - Landing page and marketing pages
- `app/docs` - Documentation layout and pages
- `app/api/search/route.ts` - Search API route handler

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Documentation**: [Fumadocs](https://fumadocs.dev)
- **Styling**: Tailwind CSS
- **Components**: Fumadocs UI

## Learn More

- [Supasheet Repository](https://github.com/htmujahid/supasheet)
- [Fumadocs Documentation](https://fumadocs.dev)
- [Next.js Documentation](https://nextjs.org/docs)
