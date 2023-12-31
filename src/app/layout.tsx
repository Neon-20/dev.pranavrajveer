import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: [] });

export async function generateMetadata(): Promise<Metadata> {
  const description = "Pranav Rajveer";
  const title = "Pranav Rajveer";
  return {
    title,
    description,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
