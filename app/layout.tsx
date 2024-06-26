import type { Metadata } from "next"
import { Inter } from "next/font/google"
import cn from "utils/cn"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The only Pokémons that matters",
  description: "All other Pokémons are fake",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "container mx-auto bg-gray-50 md:py-10")}
      >
        {children}
      </body>
    </html>
  )
}
