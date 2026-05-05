"use client";

import Link from "next/link";

import { Zap, Github, BookOpen, Workflow } from "lucide-react";
import { buttonVariants } from "fumadocs-ui/components/ui/button";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-8 py-24 md:py-32 lg:py-40">
          <div className="inline-flex">
            <div className={buttonVariants({ size: "sm", variant: "secondary" }) + " pointer-events-none rounded-2xl"}>
              <Workflow className="h-4 w-4" />
              Open source • Self-hosted • Built on Supabase
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-5xl">
            <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              Run your internal operations
              <br />
              <span className="text-spektr-cyan-50">
                on Supabase.
              </span>
            </h1>

            <p className="text-muted-foreground mx-auto max-w-3xl text-center text-lg leading-relaxed md:text-xl">
              Supasheet turns any Supabase project into a complete internal operations platform.
              Auto-generated CRUD, multiple data views (grid, kanban, calendar, gallery, list),
              built-in auth with MFA, fine-grained RBAC, configurable dashboards, charts,
              file storage, and audit logs — all in one open-source React app.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href={"https://0.supasheet.app/"} target="_blank" rel="noreferrer">
              <button className={buttonVariants({ variant: "primary" }) + " h-11 px-6 gap-2 w-full sm:w-auto rounded-2xl"}>
                <Zap className="h-5 w-5" />
                Try the live demo
              </button>
            </Link>
            <Link href="https://github.com/htmujahid/supasheet" target="_blank" rel="noreferrer">
              <button className={buttonVariants({ variant: "outline" }) + " h-11 px-6 gap-2 w-full sm:w-auto rounded-2xl"}>
                <Github className="h-5 w-5" />
                Star on GitHub
              </button>
            </Link>
            <Link href="/docs">
              <button className={buttonVariants({ variant: "ghost" }) + " h-11 px-6 gap-2 w-full sm:w-auto rounded-2xl"}>
                <BookOpen className="h-5 w-5" />
                Read the docs
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mask-b-from-55% relative mx-auto mt-16 max-w-6xl overflow-hidden px-4">
        <Image
          className="z-2 border-border/25 relative hidden rounded-2xl border dark:block"
          src="/images/bg-dark.png"
          alt="app screen"
          width={2796}
          height={2008}
        />
        <Image
          className="z-2 border-border/25 relative rounded-2xl border dark:hidden"
          src="/images/bg-light.png"
          alt="app screen"
          width={2796}
          height={2008}
        />
      </div>
    </section>
  );
}
