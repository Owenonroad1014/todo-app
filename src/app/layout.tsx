import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Todo App",
  description: "todo list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
