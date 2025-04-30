import Link from "next/link"
import { Home, Library, Plus, Heart, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  return (
    <div className="w-[240px] bg-black flex flex-col h-full">
      <div className="p-6">
        <Link href="/" className="flex items-center mb-6">
          <svg viewBox="0 0 78 24" width="78" height="24" className="text-white">
            <path
              d="M18.616 10.639c-3.77-2.297-9.99-2.509-13.59-1.388a1.077 1.077 0 0 1-1.342-.867 1.081 1.081 0 0 1 .866-1.344c4.152-1.267 11.053-1.023 15.424 1.607a1.082 1.082 0 0 1-1.358 1.992zm-.126 3.403a.88.88 0 0 1-1.222.257c-3.149-1.944-7.952-2.506-11.674-1.372a.884.884 0 1 1-.508-1.69c4.248-1.284 9.53-.666 13.14 1.585a.88.88 0 0 1 .264 1.22zm-1.383 3.267a.707.707 0 0 1-.977.183c-2.754-1.683-6.22-2.062-10.308-1.13a.706.706 0 0 1-.843-.53.707.707 0 0 1 .53-.844c4.473-1.027 8.312-.589 11.416 1.337a.707.707 0 0 1 .182.984zm-5.953-12.732c-5.51 0-9.98 4.47-9.98 9.98 0 5.513 4.47 9.983 9.98 9.983 5.514 0 9.983-4.47 9.983-9.983 0-5.51-4.47-9.98-9.983-9.98zm25.198 4.674v9.876a.555.555 0 0 1-.555.555h-1.989a.555.555 0 0 1-.555-.555V8.674a.555.555 0 0 1 .555-.555h1.989c.306 0 .555.249.555.555zm-5.74.782c-.777-.5-1.636-.763-2.477-.763-2.344 0-3.961 1.43-3.961 3.413 0 2.133 1.582 3.013 3.556 3.6l.723.21c1.32.387 2.133.723 2.133 1.471 0 .833-.71 1.346-1.86 1.346-.999 0-1.833-.388-2.798-1.152a.556.556 0 0 0-.777.11l-.804 1.152a.55.55 0 0 0 .11.776c1.222.943 2.477 1.43 4.214 1.43 2.521 0 4.104-1.374 4.104-3.556 0-1.86-1.1-2.91-3.184-3.556l-.722-.222c-1.43-.443-2.477-.776-2.477-1.596 0-.776.666-1.264 1.638-1.264.943 0 1.693.332 2.576.97a.553.553 0 0 0 .776-.165l.693-1.096a.55.55 0 0 0-.11-.721zm14.766 3.556c0-1.97-1.222-3.556-3.334-3.556-1.944 0-3.413 1.43-3.413 3.556 0 2.133 1.47 3.556 3.413 3.556 2.112 0 3.334-1.596 3.334-3.556 0-1.97-1.222-3.556-3.334-3.556zm-2.112 0c0 1.042-.638 1.86-1.638 1.86-1.013 0-1.638-.804-1.638-1.86 0-1.042.639-1.86 1.638-1.86.986 0 1.638.804 1.638 1.86zm8.556-3.556c-1.944 0-3.413 1.43-3.413 3.556 0 2.133 1.47 3.556 3.413 3.556 2.112 0 3.334-1.596 3.334-3.556 0-1.97-1.222-3.556-3.334-3.556zm0 5.432c-1.013 0-1.638-.804-1.638-1.86 0-1.042.639-1.86 1.638-1.86.986 0 1.638.804 1.638 1.86 0 1.042-.638 1.86-1.638 1.86zm10.112-5.432c-.916 0-1.693.443-2.3 1.18V9.23a.555.555 0 0 0-.554-.555h-1.89a.555.555 0 0 0-.555.555v9.876c0 .306.25.555.555.555h1.89a.555.555 0 0 0 .555-.555v-3.11c.607.693 1.384 1.042 2.3 1.042 1.748 0 3.5-1.346 3.5-3.556 0-2.21-1.752-3.556-3.5-3.556zm-.5 5.432c-1.014 0-1.75-.804-1.75-1.86 0-1.042.736-1.86 1.75-1.86.986 0 1.638.804 1.638 1.86 0 1.042-.652 1.86-1.638 1.86zm9.387-5.432c-2.133 0-3.752 1.652-3.752 3.556 0 1.93 1.619 3.556 3.752 3.556 2.146 0 3.752-1.626 3.752-3.556 0-1.904-1.606-3.556-3.752-3.556zm0 5.432c-1.014 0-1.75-.804-1.75-1.86 0-1.042.736-1.86 1.75-1.86.999 0 1.75.804 1.75 1.86 0 1.042-.751 1.86-1.75 1.86zm8.161-5.432c-.61 0-1.89.166-1.89 1.222v.277h-1.069a.555.555 0 0 0-.555.555v1.457c0 .306.25.555.555.555h1.07v4.71a.555.555 0 0 0 .554.555h1.89a.555.555 0 0 0 .555-.555v-4.71h1.651a.555.555 0 0 0 .555-.555V10.73a.555.555 0 0 0-.555-.555h-1.651v-.222c0-.36.332-.47.776-.47.139 0 .31.028.443.055a.558.558 0 0 0 .693-.416l.333-1.43a.558.558 0 0 0-.416-.693 5.42 5.42 0 0 0-1.89-.332z"
              fill="currentColor"
            />
          </svg>
        </Link>

        <nav className="space-y-6">
          <div className="space-y-2">
            <Link
              href="/"
              className="flex items-center gap-4 text-white font-bold py-2 px-4 rounded-md hover:bg-zinc-800"
            >
              <Home size={24} />
              <span>홈</span>
            </Link>
            <Link
              href="/library"
              className="flex items-center gap-4 text-zinc-400 py-2 px-4 rounded-md hover:bg-zinc-800 hover:text-white"
            >
              <Library size={24} />
              <span>내 라이브러리</span>
            </Link>
          </div>

          <div className="space-y-2">
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-4 text-zinc-400 py-2 px-4 rounded-md hover:bg-zinc-800 hover:text-white w-full"
            >
              <Plus size={24} className="bg-zinc-400 text-zinc-800 p-1 rounded-sm" />
              <span>플레이리스트 만들기</span>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-4 text-zinc-400 py-2 px-4 rounded-md hover:bg-zinc-800 hover:text-white w-full"
            >
              <Heart size={24} className="bg-gradient-to-br from-indigo-600 to-zinc-400 p-1 rounded-sm text-white" />
              <span>좋아요 표시한 노래</span>
            </Button>
          </div>
        </nav>
      </div>

      {/* 내 플레이리스트 목록 */}
      <div className="px-2 mt-2">
        <div className="px-4 py-2">
          <h2 className="text-xs font-semibold text-zinc-400 uppercase">플레이리스트</h2>
        </div>
        <Link href="/library" className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-white">
          <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center">
            <Music size={16} className="text-zinc-400" />
          </div>
          <div>
            <p className="text-sm">내 플레이리스트 #1</p>
            <p className="text-xs text-zinc-500">SEONGHOON KIM (Shepherd)</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
