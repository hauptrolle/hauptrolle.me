import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased min-h-screen">
      <body className="min-h-screen">{children}</body>
      <Analytics />
    </html>
  );
}
