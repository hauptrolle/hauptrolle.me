import { DocumentRenderer } from "@keystatic/core/renderer";
import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import invariant from "tiny-invariant";

import { reader } from "@/app/reader";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await reader.singletons.homepage.read();

  return {
    title: homepage?.seoTitle,
  };
}

export default async function Homepage() {
  const work = (await reader.collections.work.all()).sort(
    (a, b) =>
      new Date(b.entry.periodFrom ?? "").getTime() -
      new Date(a.entry.periodFrom ?? "").getTime()
  );
  const homepage = await reader.singletons.homepage.read();

  invariant(homepage, "homepage not setup");

  return (
    <>
      <div className="mb-16 grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-12">
        <div className="flex items-center justify-start lg:justify-center">
          {homepage.avatar ? (
            <Image
              priority={true}
              src={homepage.avatar}
              width={250}
              height={250}
              quality={100}
              alt="Achim Rolle profile picture"
              className="aspect-square h-40 w-40 rotate-3 rounded-3xl object-cover md:h-60 md:w-60"
            />
          ) : null}
        </div>

        <div className="col-span-2 flex flex-col items-start justify-center lg:order-first">
          <span className="mb-6 inline-flex items-center space-x-2 rounded-md border border-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            <div
              className={cn(
                "inline-flex h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-red-500/25",
                {
                  "bg-green-600 ring-green-600/30": !!homepage.availableForWork,
                }
              )}
            />
            <span>
              {!!homepage.availableForWork
                ? "Available for work"
                : "Not available for work"}
            </span>
          </span>

          <DocumentRenderer
            renderers={{
              block: {
                paragraph: ({ children, textAlign }) => {
                  return (
                    <p
                      className={cn(
                        "mt-6 text-lg text-zinc-600 dark:text-zinc-400 lg:text-xl",
                        {
                          "text-center": textAlign === "center",
                          "text-right": textAlign === "end",
                        }
                      )}
                    >
                      {children}
                    </p>
                  );
                },
                heading: ({ children, level, textAlign }) => {
                  return (
                    <h1
                      className={cn(
                        "text-4xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-5xl",
                        {
                          "text-center": textAlign === "center",
                          "text-right": textAlign === "end",
                        }
                      )}
                    >
                      {children}
                    </h1>
                  );
                },
              },
            }}
            document={await homepage.content()}
          />
        </div>
      </div>

      <ul className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        {work.map((w) => (
          <li
            key={w.slug}
            className="space-y-3 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-800"
          >
            <time className="relative flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500">
              <span
                className="absolute inset-y-0 left-0 flex items-center"
                aria-hidden="true"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
              </span>
              {new Date(w.entry.periodFrom ?? "").getFullYear()} -{" "}
              {w.entry.periodTo
                ? new Date(w.entry.periodTo).getFullYear()
                : "now"}
            </time>

            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-white">
              {w.entry.job} @ {w.entry.company}
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400">
              {w.entry.description}
            </p>

            <ul className="text-sm text-zinc-400 dark:text-zinc-500">
              {w.entry.technology.map((t) => (
                <li key={t} className="inline">
                  <span className="text-xs text-zinc-300 dark:text-zinc-600">
                    #
                  </span>
                  {t}{" "}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
