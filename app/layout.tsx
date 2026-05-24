import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WarmupTracker — Email Deliverability Warmup Monitoring",
  description: "Track email warmup campaign effectiveness. Monitor deliverability metrics and get optimization strategies for your domain and IP warmup."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b2e9c6a0-a5d2-4a8a-be66-88f6b45322e2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
