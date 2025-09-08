import type { Metadata } from "next";
import {Kanit, Kode_Mono} from 'next/font/google'

import "@/globals.css"
import React from "react";
import HeadBar from "@components/layout/HeadBar";

const kanit = Kanit({
    subsets:["latin"],
    // display:'swap',
    weight:'400',
})
const kode_mono = Kode_Mono({
    subsets:["latin"],
    // display:'swap',
    weight:'400',
})
export const metadata: Metadata = {
  title: "Jeremy Cox",
  description: "Software & Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={kode_mono.className}>
            <body className={'bg-gray-900 h-[100vh]'}>
                    {children}
            </body>
        </html>
    );
}
