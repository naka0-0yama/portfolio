import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-bold text-gray-900 transition-colors hover:text-blue-600"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-blue-100 bg-blue-50 shadow-sm">
            <Image
              src="/icon.svg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          </span>
          <span>MyPortfolio</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-blue-600">
            About
          </Link>
          <Link href="/projects" className="transition-colors hover:text-blue-600">
            Projects
          </Link>
          <Link href="/contact" className="transition-colors hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}