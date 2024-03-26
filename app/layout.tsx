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
        className={cn(
          inter.className,
          "container mx-auto sm:px-6 lg:px-8 bg-gray-100 py-10"
        )}
      >
        {children}
      </body>
    </html>
  )
}
