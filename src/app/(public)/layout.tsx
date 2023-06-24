export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 sm:px-8">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800 lg:px-8">
        <main className="my-16 px-4 sm:my-32 sm:px-8 lg:px-12">{children}</main>

        <footer className="mt-auto flex flex-col gap-4 border-t border-zinc-100 px-4 py-8 text-center text-sm text-zinc-400 dark:border-zinc-800 dark:text-zinc-500 sm:px-8 md:flex-row md:justify-between lg:px-12">
          <p>
            Powered by{" "}
            <span role="img" aria-label="Vercel logo">
              ▲
            </span>
            <a
              href="https://vercel.com"
              target="_blank"
              className="hover:underline focus:underline focus:outline-none"
            >
              Vercel
            </a>{" "}
            &{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="hover:underline focus:underline focus:outline-none"
            >
              Next.js
            </a>
          </p>
          <p>© {new Date().getFullYear()} - Achim Rolle</p>
        </footer>
      </div>
    </div>
  );
}
