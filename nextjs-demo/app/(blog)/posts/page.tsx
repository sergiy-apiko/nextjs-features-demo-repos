import api from '@/api'
import Image from 'next/image'
import Link from 'next/link'

export default async function Posts() {
  const posts = await api.posts.list()
  return (
    <main className="flex min-h-screen flex-col items-center   p-24">
      <h1>Posts</h1>
      <ul>
        {posts.slice(0, 20).map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <li>
              {post.id}. {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  )
}
