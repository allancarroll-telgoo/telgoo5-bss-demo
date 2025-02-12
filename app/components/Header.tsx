import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Allan Wireless"
            width={240}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="#plans" className="hover:text-brand-cyan transition-colors">
                Plans
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:text-brand-cyan transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-brand-cyan transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

