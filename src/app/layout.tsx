import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { CartProvider } from "@/lib/cart-context"
import { CartPanel } from "@/components/cart-panel"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "NERD — Ювелирные украшения",
  description: "Минималистичные ювелирные украшения ручной работы",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={playfair.variable}>
        <CartProvider>
          {children}
          <CartPanel />
        </CartProvider>
      </body>
    </html>
  )
}
