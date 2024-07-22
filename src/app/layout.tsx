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
import { Fragment, useState, useEffect } from "react";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full ">
          <Fragment>
            <div className="flex flex-initial justify-center items-center font-jakarta_sans">
              <div className="flex flex-col">
                <AuthProvider>
                  <QueryProvider>
                    {/* <Notification /> */}
                    <Navbar />
                    {children}
                    <Footer />
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
