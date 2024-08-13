import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/header/header";

const farsi = localFont({ src: "../assets/IranianSans.ttf" });

export const metadata = {
  title: "music app",
  description: "a music app made by saeed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={farsi.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
