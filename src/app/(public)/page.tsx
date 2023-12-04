import { DocumentRenderer } from "@keystatic/core/renderer";
import { Metadata } from "next";
import invariant from "tiny-invariant";

import { reader } from "@/app/reader";
import { cn } from "@/utils/cn";

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
      new Date(a.entry.periodFrom ?? "").getTime(),
  );
  const homepage = await reader.singletons.homepage.read();

  invariant(homepage, "homepage not setup");

  return (
    <>
      <span className="mb-16 inline-flex items-center space-x-2 rounded-md border border-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        <div
          className={cn(
            "inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 ring-2 ring-red-500/25",
            {
              "bg-green-600 ring-green-600/30": !!homepage.availableForWork,
            },
          )}
        />
        <span>
          {!!homepage.availableForWork
            ? "Available for work"
            : "Not available for work"}
        </span>
      </span>

      <div className="space-y-6">
        <div className="prose prose-neutral dark:prose-invert">
          <DocumentRenderer document={await homepage.content()} />
        </div>

        <ul className="space-y-6">
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
      </div>
    </>
  );
}
