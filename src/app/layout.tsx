import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Northwind",
    template: "%s | Northwind",
  },
  description: "A dummy Next.js website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer>© {new Date().getFullYear()} Northwind. Dummy content.</footer>
      </body>
    </html>
  );
}
