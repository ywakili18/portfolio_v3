import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "yousof.dev",
  description:
    "Web developer portfolio from Yousof Wakili, based out of SF Bay Area",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
