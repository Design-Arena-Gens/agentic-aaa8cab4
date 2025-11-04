
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Glassmorphism Experience",
  description: "Responsive glassmorphism landing page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
