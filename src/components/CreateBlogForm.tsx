import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "../api/blogs"
import { useState } from "react"

export default function CreateBlogForm() {
  const queryClient = useQueryClient()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
      setTitle("")
      setContent("")
    },
  })

  return (
    <div className="space-y-2 mb-6">
      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        className="bg-black text-white px-4 py-2"
        onClick={() =>
          mutation.mutate({
            title,
            content,
            description: content.slice(0, 50),
            category: ["GENERAL"],
            coverImage: "",
            date: new Date().toISOString(),
          })
        }
      >
        Create Blog
      </button>
    </div>
  )
}
