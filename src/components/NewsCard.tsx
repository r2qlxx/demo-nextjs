"use client"

import { useRouter } from "next/navigation"

type Props = {
  post: {
    userId: number,
    id: number,
    title: string,
    body: string,
  }
}

const NewsCard = ({ post }: Props) => {
  const router = useRouter();

  const handleNewsCard = (id: number) => {
    router.push(`/news/${id}`);
  }

  return (
    <div className="w-full max-w-screen-lg min-h-40 p-4 shadow cursor-pointer hover:scale-105 transition-all flex flex-col gap-4" onClick={() => handleNewsCard(post.id)}>
      <p className="text-xs text-end">MM/DD/YYYY</p>
      <p className="text-xl font-bold">{post.title}</p>
      <div className="border border-gray-50"></div>
      <p className="text-xs truncate">{post.body}</p>
    </div>
  )
}
export default NewsCard