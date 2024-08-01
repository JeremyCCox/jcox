import type { Metadata } from "next";
import {Kanit, Kode_Mono} from 'next/font/google'

import "./globals.css";
import React from "react";

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
            <body className={'bg-gray-900'}>
                <div className={'min-h-[100vh]'}>
                    {children}
                </div>
                <div className={'h-8 flex justify-evenly'}>
                    <a href={'/terms'} className={'text-blue-800 text-lg underline'}> Terms and Conditions</a>
                </div>
            </body>
        </html>
    );
}
