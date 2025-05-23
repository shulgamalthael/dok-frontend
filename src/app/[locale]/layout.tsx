import type {Metadata} from "next";
import {ReactNode} from "react";
import {Roboto} from "next/font/google";

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Infinity Suit",
    description: "Infinity Suit Website",
    icons: {
        icon: "/favicon.ico",
    }
};

interface RootLayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function RootLayout({
 children,
 params,
}: Readonly<RootLayoutProps>) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang="en">
            <body
                className={`${roboto.variable} antialiased`}
            >
                <NextIntlClientProvider>
                    <Header/>
                    {children}
                    <Footer/>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
