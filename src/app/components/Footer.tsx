import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold">MyWebsite</h2>
          <p className="mt-3 text-sm text-gray-200 max-w-xs">
            Building modern web experiences with Next.js, TailwindCSS, and TypeScript.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              🌐
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              🐦
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              📸
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              💼
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 mt-6 py-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
