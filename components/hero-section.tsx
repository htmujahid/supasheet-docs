"use client";

import Link from "next/link";

import { BookIcon, Database, Github, Zap } from "lucide-react";
import { buttonVariants } from "fumadocs-ui/components/ui/button";

import Image from "next/image";

export function HeroSection() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <div>
            <button className={buttonVariants({ size: "sm", variant: "secondary" })}>
              <Database className="h-4 w-4" />
              Open source • SQL-based
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-regular max-w-3xl text-center text-5xl tracking-tighter md:text-7xl">
              <span className="font-semibold">The admin panel</span>
              <br />
              <span className="text-spektr-cyan-50">
                you&apos;ve been waiting for
              </span>
            </h1>

            <p className="text-muted-foreground max-w-2xl text-center text-lg leading-relaxed tracking-tight md:text-xl">
              Open source admin panel that connects to your Supabase
              automatically. Just add your connection details and start managing
              your data instantly. No complex setup required - just connect and
              go.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link href={"https://demo.supasheet.app/"} target="_blank" rel="noreferrer">
              <button className={buttonVariants({ size: "icon", variant: "primary" }) + " w-36 gap-2"}>
                <Zap className="h-4 w-4" />
                Start Demo
              </button>
            </Link>
            <Link href="/docs">
              <button className={buttonVariants({ size: "icon", variant: "outline" }) + " w-36 gap-2"}>
                <BookIcon className="h-4 w-4" />
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
                className="relative z-[2] rounded-[--radius] border dark:hidden"
                src="/images/bg-light.png"
                alt="Supasheet hero section"
                width={2880}
                height={2074}
              />
              <Image
                className="relative z-[2] hidden rounded-[--radius] border dark:block"
                src="/images/bg-dark.png"
                alt="Supasheet hero section"
                width={2880}
                height={2074}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}