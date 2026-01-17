export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-bold text-lg">
          CA Monk
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-black cursor-pointer">Tools</a>
          <a className="hover:text-black cursor-pointer">Practice</a>
          <a className="hover:text-black cursor-pointer">Events</a>
          <a className="hover:text-black cursor-pointer">Job Board</a>
        </div>

        <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">
          Profile
        </button>
      </div>
    </nav>
  )
}
