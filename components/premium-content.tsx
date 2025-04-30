"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function PremiumContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-900 via-blue-900 to-black pb-24">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* 헤더 섹션 */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">3개월에 ₩0으로 Premium을 즐겨보세요</h1>
          <p className="text-lg mb-6">
            광고 없는 음악 감상, 오프라인 재생 등 다양한 혜택을 누려보세요.
            <br />
            언제든 해지 가능합니다.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 font-bold">시작하기</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 font-bold"
            >
              모든 요금제 보기
            </Button>
          </div>
          <p className="text-xs mt-4 text-gray-300 max-w-2xl mx-auto">
            Premium 개인에만 적용됩니다. 3개월 후에 월정액(매달 ₩10,900)이 청구됩니다. Premium 구독 이력이 있는 사용자는
            혜택을 이용할 수 없습니다.
            <br />이 프로모션은 2023년 5월 말에 종료됩니다.
          </p>
        </div>

        {/* 합리적인 요금제 섹션 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">어떤 상황에도 합리적인 요금제</h2>
          <p className="text-lg mb-6">
            Premium 요금제를 선택하고 혜택을, 스마트 앱 기기 기기에서 제한 없이 광고 없는 음악을 들으세요.
            <br />
            다양한 방법으로 요금을 결제하세요. 언제든 해지 가능합니다.
          </p>
          <div className="flex justify-center gap-2 mb-2">
            <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
              <span className="text-black font-bold text-xs">VISA</span>
            </div>
            <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
              <span className="text-black font-bold text-xs">MASTER</span>
            </div>
            <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
              <span className="text-black font-bold text-xs">AMEX</span>
            </div>
            <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
              <span className="text-black font-bold text-xs">JCB</span>
            </div>
          </div>
          <p className="text-sm text-gray-300">이외 결제 방식</p>
        </div>

        {/* 혜택 섹션 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">모든 Premium 요금제에는 아래의 혜택이 포함됩니다</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <Check className="text-white" />
              <span>수백만 개의 곡 감상</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-white" />
              <span>광고 없이 음악 감상하기</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-white" />
              <span>다운로드하여 오프라인에서 감상</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-white" />
              <span>온디바이스 상징하이 재생</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-white" />
              <span>뛰어난 음질</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-white" />
              <span>친구와 함께 실시간으로 감상</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-white" />
              <span>재생목록 관리</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-white" />
              <span>K-Pop 믹스와 테마</span>
            </div>
          </div>
        </div>

        {/* 요금제 카드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 개인 요금제 */}
          <div className="bg-zinc-900 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">P</span>
                </div>
                <span className="font-bold">Premium</span>
              </div>
              <div className="bg-pink-200 text-pink-800 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                3개월 무료 이용
              </div>
              <h3 className="text-2xl font-bold mb-2">개인</h3>
              <p className="text-sm mb-4">
                3개월 무료 이용
                <br />
                계정 1개 월정액 요금제 (₩10,900/개월 또는) 결제
              </p>
              <Separator className="bg-zinc-800 my-4" />
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-xl">•</span>
                  <span className="text-sm">Premium 계정 1개</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">•</span>
                  <span className="text-sm">언제든 해지가능</span>
                </li>
              </ul>
              <Button className="w-full bg-pink-200 text-pink-800 hover:bg-pink-300 font-bold py-6 rounded-full">
                3개월 무료 체험
              </Button>
              <p className="text-xs text-gray-400 mt-4">
                3개월 무료 이용(이후에는 ₩10,900/개월 요금이 부과됩니다). Premium 구독 이력이 있는 사용자는 혜택을
                이용할 수 없습니다.
                <a href="#" className="underline ml-1">
                  이용 약관
                </a>
                이 적용됩니다.
                <br />이 프로모션은 2023년 5월 말에 종료됩니다.
              </p>
            </div>
          </div>

          {/* 듀오 요금제 */}
          <div className="bg-zinc-900 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">P</span>
                </div>
                <span className="font-bold">Premium</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">듀오</h3>
              <p className="text-sm mb-4">매월 ₩16,350(개/개월 또는)</p>
              <Separator className="bg-zinc-800 my-4" />
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-xl">•</span>
                  <span className="text-sm">Premium 별도 계정 2개</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">•</span>
                  <span className="text-sm">언제든 해지가능</span>
                </li>
              </ul>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold py-6 rounded-full">
                Premium 듀오 시작하기
              </Button>
              <p className="text-xs text-gray-400 mt-4">
                같은 주소에 거주하는 커플을 위한 요금제입니다. 자세히 알아보세요.
              </p>
            </div>
          </div>

          {/* 베이직 요금제 */}
          <div className="bg-zinc-900 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">P</span>
                </div>
                <span className="font-bold">Premium</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">베이직</h3>
              <p className="text-sm mb-4">요금제 정보</p>
              <Separator className="bg-zinc-800 my-4" />
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-xl">•</span>
                  <span className="text-sm">혜택 정보</span>
                </li>
              </ul>
              <Button className="w-full bg-green-400 text-black hover:bg-green-500 font-bold py-6 rounded-full">
                자세히 알아보기
              </Button>
              <p className="text-xs text-gray-400 mt-4">베이직 요금제에 대한 추가 정보입니다. 자세히 알아보세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
