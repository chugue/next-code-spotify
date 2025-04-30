import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import Player from "@/components/player"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spotify 클론",
  description: "Next.js로 만든 Spotify 클론 웹사이트",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white overflow-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex h-screen flex-col overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
            </div>
            <Player />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
