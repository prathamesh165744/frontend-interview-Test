import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import BlogList from "./components/BlogList"
import BlogDetail from "./components/BlogDetail"
import CreateBlogForm from "./components/CreateBlogForm"
import Footer from "./components/Footer"


export default function App() {
  const [selectedId, setSelectedId] = useState<number>(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-7xl grid grid-cols-3 gap-8 px-6 py-10">
        <aside className="space-y-6">
          <CreateBlogForm />
          <BlogList onSelect={setSelectedId} />
        </aside>

        <section className="col-span-2">
          <BlogDetail blogId={selectedId} />
        </section>
      </main>
      <Footer />

    </div>
  )
}
