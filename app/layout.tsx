import localFont from "next/font/local";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Header from "@/app/components/layout/header";
import StarCanvas from "@/app/components/layout/star-canvas";
import "@/app/styles/globals.scss";

const pretendard = localFont({
    src: "./styles/fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "45 920",
    variable: "--font-pretendard",
});

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
        <html lang="ko">
            <body className={`${GeistSans} ${pretendard}`}>
                <StarCanvas />
                <div className="wrap">
                    <Header />
                    <div className="container">{children}</div>
                </div>
            </body>
        </html>
    );
}