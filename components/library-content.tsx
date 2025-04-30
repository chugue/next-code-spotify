"use client"

import { useState } from "react"
import { Search, Music, MoreHorizontal, User2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LibraryContent() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="flex-1 overflow-y-auto bg-zinc-900 pb-24">
      {/* 플레이리스트 헤더 */}
      <div className="flex items-end gap-6 p-6 h-80 bg-gradient-to-b from-zinc-800 to-zinc-900">
        <div className="relative w-56 h-56 shadow-lg bg-zinc-800 flex items-center justify-center">
          <Music size={64} className="text-zinc-500" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">공개 플레이리스트</span>
          <h1 className="text-7xl font-bold">내 플레이리스트 #1</h1>
          <div className="flex items-center gap-1 mt-4 text-sm text-zinc-300">
            <span>SEONGHOON KIM (Shepherd)</span>
          </div>
        </div>
      </div>

      {/* 컨트롤 버튼 */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-6">
          <Button className="rounded-full bg-green-500 hover:bg-green-400 h-14 w-14 flex items-center justify-center">
            <User2 size={24} className="text-black" />
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <MoreHorizontal size={24} />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-zinc-400 hover:text-white">
            편집
          </Button>
          <Button variant="ghost" className="text-zinc-400 hover:text-white">
            정렬
          </Button>
        </div>
      </div>

      {/* 검색 및 빈 상태 */}
      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold mb-4">플레이리스트에 추가할 곡을 찾아보세요</h2>
        <div className="relative w-full max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
          <Input
            type="search"
            placeholder="아티스트, 앨범 또는 곡 검색하기"
            className="pl-10 bg-zinc-800 border-none focus-visible:ring-0 text-sm rounded-md"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        {/* 빈 상태 메시지 */}
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-zinc-400 text-center mb-4">아직 플레이리스트에 추가된 곡이 없습니다.</p>
          <p className="text-zinc-400 text-center">위의 검색창을 사용하여 좋아하는 곡을 찾아 추가해보세요.</p>
        </div>
      </div>

      {/* 푸터 */}
      <div className="mt-auto p-6 border-t border-zinc-800">
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="text-sm font-bold mb-4">회사</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>상세정보</li>
              <li>채용 정보</li>
              <li>For the Record</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4">커뮤니티</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>아티스트</li>
              <li>개발자</li>
              <li>광고</li>
              <li>투자자</li>
              <li>공급업체</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4">유용한 링크</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>지원</li>
              <li>무료 모바일 앱</li>
              <li>소개</li>
              <li>개인정보 보호 센터</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4">Spotify 소개</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>Premium 계정</li>
              <li>Premium 듣기</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs text-zinc-400 mt-8">
          <div className="flex gap-4">
            <span>법적 고지</span>
            <span>개인정보 보호 센터</span>
            <span>개인정보 처리방침</span>
            <span>쿠키 설정</span>
            <span>회사 정보</span>
          </div>
          <div>© 2023 Spotify AB</div>
        </div>
      </div>
    </div>
  )
}
