"use client"

import { useState } from "react"
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function Player() {
  const [volume, setVolume] = useState(70)
  const [progress, setProgress] = useState(30)

  return (
    <div className="h-20 bg-zinc-900 border-t border-zinc-800 px-4 flex items-center z-40 fixed bottom-0 left-0 right-0">
      <div className="w-1/3 flex items-center gap-4 min-w-[180px]">
        <div className="w-14 h-14 bg-zinc-800 rounded">
          <div className="w-full h-full flex items-center justify-center text-xs text-center">앨범 커버</div>
        </div>
        <div>
          <h4 className="text-sm font-medium">현재 재생 중인 곡</h4>
          <p className="text-xs text-zinc-400">아티스트</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-2 px-4">
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white">
            <Shuffle size={16} />
          </button>
          <button className="text-zinc-400 hover:text-white">
            <SkipBack size={16} />
          </button>
          <button className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform">
            <Play size={16} fill="black" />
          </button>
          <button className="text-zinc-400 hover:text-white">
            <SkipForward size={16} />
          </button>
          <button className="text-zinc-400 hover:text-white">
            <Repeat size={16} />
          </button>
        </div>
        <div className="w-full max-w-md flex items-center gap-2">
          <span className="text-xs text-zinc-400">1:23</span>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="cursor-pointer"
            onValueChange={(value) => setProgress(value[0])}
          />
          <span className="text-xs text-zinc-400">3:45</span>
        </div>
      </div>

      <div className="w-1/3 flex justify-end items-center gap-3 min-w-[180px]">
        <Volume2 size={16} className="text-zinc-400" />
        <Slider
          value={[volume]}
          max={100}
          step={1}
          className="w-24 cursor-pointer"
          onValueChange={(value) => setVolume(value[0])}
        />
        <button className="text-zinc-400 hover:text-white ml-2">
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  )
}
