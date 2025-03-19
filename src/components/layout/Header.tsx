import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              My Blog
            </Link>
          </div>

          <div className="hidden sm:flex sm:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              ホーム
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              ブログ
            </Link>
            <Link
              href="/profile"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              プロフィール
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
