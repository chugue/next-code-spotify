import PlaylistDetail from "@/components/playlist-detail"

export default function PlaylistPage({ params }: { params: { id: string } }) {
  return <PlaylistDetail id={params.id} />
}
