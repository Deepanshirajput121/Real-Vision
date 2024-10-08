import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "400 700", // only if these weights are used
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Real Vision | Your Trusted Partner for Event Services",
  description: "Welcome to Real Vision, your one-stop solution for professional DJ, sound system, mic, and projector services for events across India. Explore our services and make your event extraordinary with Real Vision.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-geist-sans`}
      >
        <Navbar />
        <main className="mx-auto min-h-[50vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
