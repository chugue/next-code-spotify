"use client"

import { useState } from "react"
import Header from "@/components/header"
import MainContent from "@/components/main-content"
import SearchResults from "@/components/search-results"

// 더미 검색 결과 데이터
const DUMMY_SEARCH_RESULTS = [
  {
    id: "1",
    title: "HOT",
    artist: "LE SSERAFIM",
    album: "HOT",
    duration: "2:23",
    albumCover: "/placeholder.svg?height=40&width=40&text=HOT",
  },
  {
    id: "2",
    title: "Come Over",
    artist: "LE SSERAFIM",
    album: "HOT",
    duration: "2:17",
    albumCover: "/placeholder.svg?height=40&width=40&text=HOT",
  },
  {
    id: "3",
    title: "HOT",
    artist: "LE SSERAFIM",
    album: "HOT (LE SSERAFIM Package)",
    duration: "2:23",
    albumCover: "/placeholder.svg?height=40&width=40&text=HOT",
  },
  {
    id: "4",
    title: "HOT",
    artist: "세븐틴",
    album: "SEVENTEEN 4th Album 'Face the Sun'",
    duration: "3:17",
    albumCover: "/placeholder.svg?height=40&width=40&text=SVT",
  },
  {
    id: "5",
    title: "Hot Mess",
    artist: "aespa",
    album: "Hot Mess",
    duration: "3:12",
    albumCover: "/placeholder.svg?height=40&width=40&text=aespa",
  },
  {
    id: "6",
    title: "HOT TO GO!",
    artist: "Chappell Roan",
    album: "The Rise and Fall of a Midwest Princess",
    duration: "3:04",
    albumCover: "/placeholder.svg?height=40&width=40&text=CR",
  },
  {
    id: "7",
    title: "HOT (English ver.)",
    artist: "LE SSERAFIM",
    album: "HOT (English ver.)",
    duration: "2:23",
    albumCover: "/placeholder.svg?height=40&width=40&text=HOT",
  },
  {
    id: "8",
    title: "HOT (English ver.) (feat. JADE)",
    artist: "LE SSERAFIM, JADE",
    album: "HOT (English ver.) (feat. JADE)",
    duration: "2:23",
    albumCover: "/placeholder.svg?height=40&width=40&text=HOT",
  },
  {
    id: "9",
    title: "HOT",
    artist: "LE SSERAFIM",
    album: "HOT (English ver.) (feat. JADE)",
    duration: "2:23",
    albumCover: "/placeholder.svg?height=40&width=40&text=HOT",
  },
  {
    id: "10",
    title: "Hotline Bling",
    artist: "Drake",
    album: "Views",
    duration: "4:27",
    albumCover: "/placeholder.svg?height=40&width=40&text=Drake",
  },
  {
    id: "11",
    title: "Hot Summer",
    artist: "청하",
    album: "Korean Dream",
    duration: "3:34",
    albumCover: "/placeholder.svg?height=40&width=40&text=청하",
  },
  {
    id: "12",
    title: "Hotel California",
    artist: "Eagles",
    album: "Take It To The Summit (Houston, TX 16th Nov '76)",
    duration: "7:01",
    albumCover: "/placeholder.svg?height=40&width=40&text=Eagles",
  },
  {
    id: "13",
    title: "Hotel California - 2013 Remaster",
    artist: "Eagles",
    album: "Hotel California (2013 Remaster)",
    duration: "6:31",
    albumCover: "/placeholder.svg?height=40&width=40&text=Eagles",
  },
  {
    id: "14",
    title: "HOTEL LOBBY (Unc & Phew) - A COLORS SHOW",
    artist: "Quavo, Takeoff",
    album: "HOTEL LOBBY (Unc & Phew) - A COLORS SHOW",
    duration: "2:45",
    albumCover: "/placeholder.svg?height=40&width=40&text=QT",
  },
  {
    id: "15",
    title: "HOTEL LOBBY (Unc & Phew)",
    artist: "Quavo, Takeoff",
    album: "HOTEL LOBBY (Unc & Phew)",
    duration: "2:22",
    albumCover: "/placeholder.svg?height=40&width=40&text=QT",
  },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setIsSearching(true)
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      {isSearching ? <SearchResults results={DUMMY_SEARCH_RESULTS} query={searchQuery} /> : <MainContent />}
    </>
  )
}
