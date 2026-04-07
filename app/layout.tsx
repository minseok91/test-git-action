import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "고기박스",
  description: "로그인",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
