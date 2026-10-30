import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700"] });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Syed Muhammad Abbas Zaidi | .NET & Python Developer",
  description: "Portfolio of Syed Muhammad Abbas Zaidi, a 2025 computer science graduate building .NET systems and Python machine learning models.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
