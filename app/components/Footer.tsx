import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="Allan Wireless"
              width={100}
              height={35}
              className="h-8 w-auto"
            />
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-8">
              <li>
                <Link href="#" className="text-gray-400 hover:text-brand-cyan">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-brand-cyan">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-brand-cyan">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Allan Wireless. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

