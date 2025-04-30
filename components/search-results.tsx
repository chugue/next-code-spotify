"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Clock } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  artist: string
  album: string
  duration: string
  albumCover: string
}

interface SearchResultsProps {
  results: SearchResult[]
  query: string
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null)

  return (
    <div className="flex-1 overflow-y-auto bg-black pb-24">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">"{query}" 검색 결과</h1>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-zinc-400 text-sm border-b border-zinc-800">
              <th className="w-12 text-center py-2">#</th>
              <th className="text-left py-2">제목</th>
              <th className="text-left py-2 hidden md:table-cell">앨범</th>
              <th className="w-24 text-center py-2">
                <Clock size={16} className="inline" />
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((track, index) => (
              <tr
                key={track.id}
                className="hover:bg-zinc-800/50 group border-b border-zinc-800/30"
                onMouseEnter={() => setHoveredTrack(track.id)}
                onMouseLeave={() => setHoveredTrack(null)}
              >
                <td className="w-12 text-center py-3 text-zinc-400 relative">
                  {hoveredTrack === track.id ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play size={16} fill="white" className="ml-0.5" />
                    </div>
                  ) : (
                    index + 1
                  )}
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <Image
                        src={track.albumCover || "/placeholder.svg"}
                        alt={track.album}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{track.title}</p>
                      <p className="text-sm text-zinc-400">{track.artist}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-zinc-400 hidden md:table-cell">{track.album}</td>
                <td className="w-24 text-center py-3 text-zinc-400">{track.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
