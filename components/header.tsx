"use client";

import type React from "react";

import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim() && onSearch) {
      onSearch(searchValue);
    }
  };

  const handleSignup = () => {
    console.log("회원가입:", email);
    router.push("/signup");
  };

  return (
    <>
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
                onClick={() => setShowSignupModal(true)}
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

      <Dialog open={showSignupModal} onOpenChange={setShowSignupModal}>
        <DialogContent className="bg-black text-white border-none p-0 max-w-sm">
          <div className="flex flex-col items-center text-center p-8">
            <img src="/spotify-logo.svg" alt="Spotify" className="h-12 mb-6" />
            <DialogTitle className="text-5xl font-bold mb-10 leading-[1.2]">
              가입하고 <br /> 원하는 콘텐츠를 <br /> 감상하세요
            </DialogTitle>

            <div className="w-full space-y-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSignup();
                }}
                className="w-full"
              >
                <div className="mb-6">
                  <label className="block text-sm mb-2 text-left font-medium">
                    이메일 주소
                  </label>
                  <Input
                    type="email"
                    placeholder="name@domain.com"
                    className="w-full bg-zinc-800 border-none rounded-md text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold rounded-full py-3"
                >
                  다음
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-700"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-black px-2 text-zinc-400 text-sm">
                    또는
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  className="w-full bg-transparent border border-zinc-600 hover:border-white text-white font-medium rounded-full py-3 flex items-center justify-center gap-2"
                  onClick={() => console.log("Google 로그인")}
                >
                  <img
                    src="/google-icon.svg"
                    alt="Google"
                    className="h-5 w-5"
                  />
                  Google로 가입하기
                </Button>
                <Button
                  className="w-full bg-transparent border border-zinc-600 hover:border-white text-white font-medium rounded-full py-3 flex items-center justify-center gap-2"
                  onClick={() => console.log("Facebook 로그인")}
                >
                  <img
                    src="/facebook-icon.svg"
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                  Facebook으로 가입하기
                </Button>
                <Button
                  className="w-full bg-transparent border border-zinc-600 hover:border-white text-white font-medium rounded-full py-3 flex items-center justify-center gap-2"
                  onClick={() => console.log("Apple 로그인")}
                >
                  <img src="/apple-icon.svg" alt="Apple" className="h-5 w-5" />
                  Apple로 가입
                </Button>
              </div>

              <div className="text-zinc-400 text-sm mt-6">
                이미 계정이 있나요?{" "}
                <a
                  href="/login"
                  className="text-white underline hover:text-green-500"
                >
                  여기에서 로그인하세요
                </a>
                .
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
