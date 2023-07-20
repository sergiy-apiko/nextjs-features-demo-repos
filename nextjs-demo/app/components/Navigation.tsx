import Image from 'next/image'
import Link from 'next/link'
export default function Navigation() {
  return (
    <nav className="py-24 px-12 min-h-full border-r-2">
      <ul>
        <Link href="/">
          {' '}
          <li className="py-2 hover:bg-slate-300">Home</li>{' '}
        </Link>
        <Link href="/about">
          {' '}
          <li className="py-2 hover:bg-slate-300">About</li>{' '}
        </Link>
        <Link href="/posts">
          {' '}
          <li className="py-2 hover:bg-slate-300">Blog</li>{' '}
        </Link>
        <Link href="/stream">
          {' '}
          <li className="py-2 hover:bg-slate-300">Streaming</li>{' '}
        </Link>
        <Link href="/dashboard">
          {' '}
          <li className="py-2 hover:bg-slate-300">Parallel Route</li>{' '}
        </Link>
        <Link href="/empty">
          {' '}
          <li className="py-2 hover:bg-slate-300">Not found</li>{' '}
        </Link>
      </ul>
    </nav>
  )
}
