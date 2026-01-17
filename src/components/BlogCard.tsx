import type { Blog } from "../types/blog"

type Props = {
  blog: Blog
  onClick: (id: number) => void
}

export default function BlogCard({ blog, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(blog.id)}
      className="cursor-pointer rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition"
    >
      <span className="text-xs font-medium text-indigo-600">
        {blog.category.join(", ")}
      </span>

      <h3 className="mt-2 font-semibold">{blog.title}</h3>

      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
        {blog.description}
      </p>

      <p className="mt-2 text-xs text-gray-400">
        {new Date(blog.date).toDateString()}
      </p>
    </div>
  )
}
