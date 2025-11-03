"use client";

import Link from "next/link";

import { BookIcon, Database, Zap } from "lucide-react";
import { buttonVariants } from "fumadocs-ui/components/ui/button";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-8 py-24 md:py-32 lg:py-40">
          <div className="inline-flex">
            <div className={buttonVariants({ size: "sm", variant: "secondary" }) + " pointer-events-none rounded-2xl"}>
              <Database className="h-4 w-4" />
              Open source • Full-fledged CMS
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-5xl">
            <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              Complete CMS Platform
              <br />
              <span className="text-spektr-cyan-50">
                built on Supabase
              </span>
            </h1>

            <p className="text-muted-foreground mx-auto max-w-3xl text-center text-lg leading-relaxed md:text-xl">
              An opinionated, full-fledged open-source CMS with everything included.
              Go beyond basic admin panels with built-in authentication, dashboards,
              charts, reports, file management, and comprehensive data tools.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href={"https://demo.supasheet.app/"} target="_blank" rel="noreferrer">
              <button className={buttonVariants({ variant: "primary" }) + " h-11 px-6 gap-2 w-full sm:w-auto rounded-2xl"}>
                <Zap className="h-5 w-5" />
                Start Demo
              </button>
            </Link>
            <Link href="/docs">
              <button className={buttonVariants({ variant: "outline" }) + " h-11 px-6 gap-2 w-full sm:w-auto rounded-2xl"}>
                <BookIcon className="h-5 w-5" />
                Documentation
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
        <div className="-mr-16 [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] pl-16 [perspective:1200px] lg:-mr-36 lg:pl-36">
          <div className="[transform:rotateX(20deg);]">
            <div className="relative skew-x-[.36rad] lg:h-[44rem]">
              <Image
                className="relative z-[2] rounded-2xl border dark:hidden"
                src="/images/bg-light.png"
                alt="Supasheet hero section"
                width={2880}
                height={2074}
              />
              <Image
                className="relative z-[2] hidden rounded-2xl border dark:block"
                src="/images/bg-dark.png"
                alt="Supasheet hero section"
                width={2880}
                height={2074}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}