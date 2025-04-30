import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface UserAvatarProps {
  className?: string
  initial?: string
}

export default function UserAvatar({ className, initial = "S" }: UserAvatarProps) {
  return (
    <Avatar className={`bg-purple-300 text-purple-900 ${className}`}>
      <AvatarFallback className="bg-purple-300 text-purple-900 font-semibold text-base">{initial}</AvatarFallback>
    </Avatar>
  )
}
