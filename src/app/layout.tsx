import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import PasswordProtection from "@/components/PasswordProtection";

const crimson = Crimson_Text({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson"
});

export const metadata: Metadata = {
  title: "Nicolette & Sean's Wedding",
  description: "Join us in celebrating our special day in New York, New York",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            @font-face {
              font-family: 'Exmouth';
              src: url('/fonts/exmouth_.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>
      </head>
      <body className={`${crimson.variable} font-crimson`}>
        <AuthProvider>
          <PasswordProtection />
          <main className="min-h-screen bg-pearl">
            {children}
          </main>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}