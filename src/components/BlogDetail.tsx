import { useQuery } from "@tanstack/react-query"
import { getBlogById } from "../api/blogs"

type Props = {
  blogId: number
}

export default function BlogDetail({ blogId }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId),
    enabled: blogId !== 0,
  })

  if (blogId === 0)
    return <p className="text-gray-500">Select a blog to read</p>

  if (isLoading) return <p>Loading...</p>

  return (
    <article className="bg-white rounded-xl p-6 shadow-sm space-y-6">
      <img
        src={data!.coverImage}
        className="rounded-lg w-full h-80 object-cover"
      />

      <h1 className="text-3xl font-bold">{data!.title}</h1>

      <p className="text-gray-700 leading-relaxed">
        {data!.content}
      </p>
    </article>
  )
}
