import api from '@/api'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate=3000
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await api.posts.details(params.id)

  return {
    title: `Demo | ${post.title}`,
  }
}
export default async function Posts({ params }: { params: { id: string } }) {
  const post = await api.posts.details(params.id)
  return (
    <main className="flex min-h-screen flex-col items-center   p-24">
      <h1 className="font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </main>
  )
}
