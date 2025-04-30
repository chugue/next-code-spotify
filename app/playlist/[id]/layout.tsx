import type React from "react"
import Header from "@/components/header"

export default function PlaylistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
