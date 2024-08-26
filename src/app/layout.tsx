import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { UserContextProvider } from "@/context/user";
import Provider from "./util/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <UserContextProvider>
            <Navbar />
            {children}
            <Footer />
          </UserContextProvider>
        </Provider>
      </body>
    </html>
  );
}
