"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Clock, Heart, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

// 더미 데이터 - 실제 구현에서는 API에서 가져올 수 있습니다
const PLAYLIST_DATA = {
  id: "1",
  title: "봄 설레임",
  description: "봄에 어울리는 설레는 노래들",
  coverImage: "/placeholder.svg?height=300&width=300&text=봄+설레임",
  creator: "Spotify",
  followers: "3,933",
  songs: 32,
  tracks: [
    {
      id: "1",
      title: "아마도 그건 사랑이 아닐 거야",
      artist: "POYOUTOOB",
      album: "아마도 그건 사랑이 아닐 거야",
      duration: "4:25",
      albumCover: "/placeholder.svg?height=40&width=40&text=1",
    },
    {
      id: "2",
      title: "Almond Chocolate (Korean Ver.)",
      artist: "Almond Chocolate Korean Ver.",
      album: "Almond Chocolate Korean Ver.",
      duration: "3:21",
      albumCover: "/placeholder.svg?height=40&width=40&text=2",
    },
    {
      id: "3",
      title: "달의 뒤편",
      artist: "몽환소녀",
      album: "Full Album RED PLANET",
      duration: "3:33",
      albumCover: "/placeholder.svg?height=40&width=40&text=3",
    },
    {
      id: "4",
      title: "Really Like You",
      artist: "TWICE",
      album: "Really Like You",
      duration: "2:58",
      albumCover: "/placeholder.svg?height=40&width=40&text=4",
    },
    {
      id: "5",
      title: "200%",
      artist: "AKMU",
      album: "PLAY",
      duration: "3:12",
      albumCover: "/placeholder.svg?height=40&width=40&text=5",
    },
    {
      id: "6",
      title: "밤의 시간 들어",
      artist: "김준수",
      album: "밤의 시간 들어",
      duration: "3:48",
      albumCover: "/placeholder.svg?height=40&width=40&text=6",
    },
    {
      id: "7",
      title: "봄이 좋아",
      artist: "IU",
      album: "3.2",
      duration: "3:26",
      albumCover: "/placeholder.svg?height=40&width=40&text=7",
    },
    {
      id: "8",
      title: "그대라는 - Remastering",
      artist: "Martin Smith",
      album: "SLATE",
      duration: "3:52",
      albumCover: "/placeholder.svg?height=40&width=40&text=8",
    },
    {
      id: "9",
      title: "봄이 온 것처럼",
      artist: "비투비",
      album: "DEAR. X",
      duration: "3:35",
      albumCover: "/placeholder.svg?height=40&width=40&text=9",
    },
    {
      id: "10",
      title: "봄날의 별 (Spring Love)",
      artist: "첸, 백현",
      album: "SM STATION",
      duration: "3:18",
      albumCover: "/placeholder.svg?height=40&width=40&text=10",
    },
    {
      id: "11",
      title: "사랑인가요 꿈인가요 환상인가요",
      artist: "NCT 127",
      album: "WALK - The 5th Album",
      duration: "2:47",
      albumCover: "/placeholder.svg?height=40&width=40&text=11",
    },
    {
      id: "12",
      title: "오직 너 뿐",
      artist: "윤도현, 정은지",
      album: "사랑을 한다 2.0 (Original Mix)",
      duration: "5:21",
      albumCover: "/placeholder.svg?height=40&width=40&text=12",
    },
    {
      id: "13",
      title: "나의 봄",
      artist: "폴킴/아이유",
      album: "나의 계절 봄 편",
      duration: "3:37",
      albumCover: "/placeholder.svg?height=40&width=40&text=13",
    },
    {
      id: "14",
      title: "Like a Fool",
      artist: "트와이스",
      album: "Like a Fool",
      duration: "3:34",
      albumCover: "/placeholder.svg?height=40&width=40&text=14",
    },
    {
      id: "15",
      title: "아름다워 (Beautiful)",
      artist: "크러쉬",
      album: "봄이 영원히 오지 않는 OST",
      duration: "3:44",
      albumCover: "/placeholder.svg?height=40&width=40&text=15",
    },
  ],
}

export default function PlaylistDetail({ id }: { id: string }) {
  // 실제 구현에서는 id를 사용하여 API에서 데이터를 가져옵니다
  const playlist = PLAYLIST_DATA
  const [isPlaying, setIsPlaying] = useState(false)
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null)

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-emerald-900/70 to-black pb-24">
      {/* 플레이리스트 헤더 */}
      <div className="flex items-end gap-6 p-6 h-80">
        <div className="relative w-56 h-56 shadow-lg">
          <Image src={playlist.coverImage || "/placeholder.svg"} alt={playlist.title} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">플레이리스트</span>
          <h1 className="text-7xl font-bold">{playlist.title}</h1>
          <div className="flex items-center gap-1 mt-4 text-sm text-zinc-300">
            <span>{playlist.description}</span>
            <span className="mx-1">•</span>
            <span>{playlist.creator}</span>
            <span className="mx-1">•</span>
            <span>좋아요 {playlist.followers}명</span>
            <span className="mx-1">•</span>
            <span>{playlist.songs}곡</span>
          </div>
        </div>
      </div>

      {/* 컨트롤 버튼 */}
      <div className="flex items-center gap-6 p-6">
        <Button
          onClick={() => setIsPlaying(!isPlaying)}
          className="rounded-full bg-green-500 hover:bg-green-400 h-14 w-14 flex items-center justify-center"
        >
          <Play size={24} fill="black" className="ml-1" />
        </Button>
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
          <Heart size={24} />
        </Button>
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
          <MoreHorizontal size={24} />
        </Button>
      </div>

      {/* 트랙 리스트 */}
      <div className="px-6 pb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-zinc-400 text-sm border-b border-zinc-700">
              <th className="w-12 text-center py-2">#</th>
              <th className="text-left py-2">제목</th>
              <th className="text-left py-2">앨범</th>
              <th className="w-24 text-center py-2">
                <Clock size={16} className="inline" />
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.tracks.map((track, index) => (
              <tr
                key={track.id}
                className="hover:bg-white/10 group"
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
                    <div className="relative">
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
                <td className="py-3 text-zinc-400">{track.album}</td>
                <td className="w-24 text-center py-3 text-zinc-400">{track.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
