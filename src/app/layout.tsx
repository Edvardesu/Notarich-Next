"use client"; // Add this directive at the top

import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { Plus_Jakarta_Sans, Bruno_Ace } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--plus-jakarta-sans",
});

const bruno_ace = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bruno-ace",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notarich Cafe",
  description: "Best food in town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Use usePathname hook
  const showNavbarFooter = pathname !== "/login"; // Check if current path is not /login

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${bruno_ace.variable} ${plus_jakarta_sans.variable}`}
      >
        <div className="flex w-full">
          <Fragment>
            <div className="flex w-full justify-center items-center font-jakarta_sans">
              <div className="flex flex-col w-full">
                <AuthProvider>
                  <QueryProvider>
                    {/* <Notification /> */}
                    {showNavbarFooter && <Navbar />}
                    {children}
                    {showNavbarFooter && <Footer />}
                    <ToastContainer
                      position="bottom-right"
                      theme="dark"
                      autoClose={3000}
                    />
                  </QueryProvider>
                </AuthProvider>
              </div>
            </div>
          </Fragment>
        </div>
      </body>
    </html>
  );
}
