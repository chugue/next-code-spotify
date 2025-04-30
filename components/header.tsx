"use client";

import type React from "react";

import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./user-avatar";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onSearch?: (query: string) => void;
  isLoggedIn?: boolean;
}

export default function Header({ onSearch, isLoggedIn = false }: HeaderProps) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim() && onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <header className="bg-black p-4 flex items-center justify-between sticky top-0 z-50">
      <div className="w-1/3"></div>
      <div className="flex items-center gap-4 w-full max-w-md justify-center">
        <form onSubmit={handleSearch} className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400"
            size={20}
          />
          <Input
            type="search"
            placeholder="어떤 콘텐츠를 감상하고 싶으세요?"
            className="pl-10 bg-zinc-800 border-none focus-visible:ring-0 text-sm rounded-full"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>

      <div className="flex items-center w-1/3 justify-end relative">
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-0 rounded-full cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <UserAvatar initial="S" className="h-9 w-9" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={5}
              className="w-56 bg-zinc-900 border-none text-white z-[200] p-1 rounded-md shadow-xl"
            >
              <DropdownMenuItem className="flex items-center justify-between py-3 px-3 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 rounded-sm focus:text-white">
                <span className="text-sm font-medium">계정</span>
                <ExternalLink size={16} className="text-white" />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between py-3 px-3 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 rounded-sm focus:text-white">
                <span className="text-sm font-medium">프로필</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between py-3 px-3 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 rounded-sm focus:text-white">
                <span className="text-sm font-medium">지원</span>
                <ExternalLink size={16} className="text-white" />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between py-3 px-3 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 rounded-sm focus:text-white">
                <span className="text-sm font-medium">다운로드하기</span>
                <ExternalLink size={16} className="text-white" />
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-800 my-1" />
              <DropdownMenuItem className="py-3 px-3 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 rounded-sm focus:text-white">
                <span className="text-sm font-medium">설정</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-800 my-1" />
              <DropdownMenuItem className="py-3 px-3 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800 rounded-sm focus:text-white">
                <span className="text-sm font-medium">로그아웃</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white hover:bg-transparent"
              onClick={() => router.push("/signup")}
            >
              가입하기
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-white text-black hover:bg-opacity-90 hover:text-black border-none px-6"
              onClick={() => router.push("/login")}
            >
              로그인하기
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
