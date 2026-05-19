import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Automation Tool – Generate Changelogs from Git Commits",
  description: "Automatically generate formatted changelogs from your git commits, PRs, and issues. Built for engineering teams, product managers, and open source maintainers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e55f94df-8260-4c10-a463-1bd746061057"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
