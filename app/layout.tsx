import Navbar from "@/components/navbar/Navbar";
import NextThemeProvider from "@/providers/theme-provider";
import { Inter } from "next/font/google";
import getCurrentUser from "./actions/getCurrentUser";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { TProvider } from "@/providers/toast-provider";
import NextAuthProvider from "@/providers/next-auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "Blog App with Nextjs 13",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider>
        <NextAuthProvider>
          <TProvider />
          <Navbar currentUser={currentUser} />
          {children}
        </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
