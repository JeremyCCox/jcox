import type { Metadata } from "next";

import React from "react";
import HeadBar from "@components/layout/HeadBar";

export const metadata: Metadata = {
  title: "Jeremy Cox",
  description: "Software & Web Developer",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
            <div className={'min-h-[100vh]'}>
                <HeadBar/>
                {children}
            </div>
            <div className={'h-8 flex justify-evenly'}>
                <a href={'/terms'} className={'text-blue-800 text-lg underline'}> Terms and Conditions</a>
            </div>
        </div>
    );
}
