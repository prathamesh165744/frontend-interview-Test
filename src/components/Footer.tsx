export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-lg">CA MONK</h3>
          <p className="text-sm text-gray-400">
            Empowering the next generation of financial leaders with tools,
            community, and knowledge.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Webinars</li>
            <li className="hover:text-white cursor-pointer">Case Studies</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-white font-semibold mb-3">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Job Board</li>
            <li className="hover:text-white cursor-pointer">Practice Tests</li>
            <li className="hover:text-white cursor-pointer">Mentorship</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between text-xs text-gray-400">
          <span>© 2024 CA Monk. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
