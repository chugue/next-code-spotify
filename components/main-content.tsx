"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Play } from "lucide-react";

export default function MainContent() {
  const [activeTab, setActiveTab] = useState("전체");
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Tabs defaultValue="전체" className="mb-6">
          <TabsList className="bg-transparent">
            <TabsTrigger
              value="전체"
              className="data-[state=active]:bg-zinc-800"
            >
              전체
            </TabsTrigger>
            <TabsTrigger
              value="음악"
              className="data-[state=active]:bg-zinc-800"
            >
              음악
            </TabsTrigger>
            <TabsTrigger
              value="팟캐스트"
              className="data-[state=active]:bg-zinc-800"
            >
              팟캐스트
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* 회원님을 위한 추천 섹션 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">회원님을 위한 추천</h2>
            <button className="text-sm text-zinc-400 hover:text-white">
              모두 보기
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="main-content-card"
                onClick={() => router.push(`/playlist/1`)}
                onMouseEnter={() => setHoveredCard(item)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-3">
                  <div className="aspect-square relative mb-3 rounded-md overflow-hidden">
                    <Image
                      src={`/music-placeholder.png?height=200&width=200&text=음악 ${item}`}
                      alt={`추천 음악 ${item}`}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                    {hoveredCard === item && (
                      <div className="absolute inset-0 flex items-end justify-end p-2">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95 slide-in-from-bottom-2">
                          <Play fill="black" stroke="black" size={15} />
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-md mb-0.5 truncate">
                    인기 트랙 {item}
                  </h3>
                  <p className="text-zinc-400 text-sm font-light truncate">
                    아티스트 {item}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 인기 아티스트 섹션 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">인기 아티스트</h2>
            <button className="text-sm text-zinc-400 hover:text-white">
              모두 표시
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {[
              { id: 1, name: "G-DRAGON", image: "/artists/g-dragon.jpeg" },
              { id: 2, name: "DAY6", image: "/artists/day6.jpeg" },
              { id: 3, name: "LE SSERAFIM", image: "/artists/lesserafim.jpeg" },
              { id: 4, name: "aespa", image: "/artists/aespa.jpeg" },
              { id: 5, name: "NewJeans", image: "/artists/newjeans.jpeg" },
              { id: 6, name: "BIGBANG", image: "/artists/bigbang.jpeg" },
            ].map((artist) => (
              <div
                key={artist.id}
                className="flex flex-col items-center cursor-pointer rounded-md bg-black hover:bg-zinc-700/50 transition-colors w-[180px] p-2 "
                onClick={() => router.push(`/artist/${artist.id}`)}
              >
                <div className="w-[150px] h-[150px] mb-3 relative group items-center justify-center">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={150}
                    height={150}
                    className="rounded-full object-cover"
                  />
                  <div className="absolute inset-0 bg-transparent rounded-full flex items-end justify-end p-2">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg transform transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 animate-in fade-in zoom-in-95 slide-in-from-bottom-2">
                      <Play fill="black" stroke="black" size={15} />
                    </div>
                  </div>
                </div>
                <span className="font-medium text-sm text-center">
                  {artist.name}
                </span>
                <span className="text-xs text-zinc-400 text-center">
                  아티스트
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 최근 재생한 항목 섹션 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">최근 재생한 항목</h2>
            <button className="text-sm text-zinc-400 hover:text-white">
              모두 보기
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="main-content-card"
                onClick={() => router.push(`/playlist/1`)}
                onMouseEnter={() => setHoveredCard(item + 10)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-3">
                  <div className="aspect-square relative mb-3 rounded-md overflow-hidden">
                    <Image
                      src={`/placeholder-top.png?height=200&width=200&text=Top ${
                        item * 10
                      }`}
                      alt={`Top ${item * 10}`}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                    {hoveredCard === item + 10 && (
                      <div className="absolute inset-0 flex items-end justify-end p-2">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95 slide-in-from-bottom-2">
                          <Play fill="black" stroke="black" size={15} />
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-md mb-0.5 truncate">
                    Top {item * 10}
                  </h3>
                  <p className="text-zinc-400 text-sm font-light truncate">
                    인기 플레이리스트
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 추천 차트 섹션 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">추천 차트</h2>
            <button className="text-sm text-zinc-400 hover:text-white">
              모두 보기
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="main-content-card"
                onClick={() => router.push(`/playlist/1`)}
                onMouseEnter={() => setHoveredCard(item)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-3">
                  <div className="aspect-square relative mb-3 rounded-md overflow-hidden">
                    <Image
                      src={`/placeholder-chart.png?height=200&width=200&text=Chart ${item}`}
                      alt={`Chart ${item}`}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                    {hoveredCard === item && (
                      <div className="absolute inset-0 flex items-end justify-end p-2">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95 slide-in-from-bottom-2">
                          <Play fill="black" stroke="black" size={15} />
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-md mb-0.5 truncate">
                    {item % 2 === 0 ? "Top 50" : "Viral 50"}
                  </h3>
                  <p className="text-zinc-400 text-sm font-light truncate">
                    {item % 3 === 0 ? "글로벌" : "대한민국"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
