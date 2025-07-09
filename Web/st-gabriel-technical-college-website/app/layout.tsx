import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Montserrat } from "next/font/google"
import Header from "@/components/ui/header";
import { Footer } from "@/components/footer"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "St. Gabriel Technical College",
  description: "Empowering students for technical excellence.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
