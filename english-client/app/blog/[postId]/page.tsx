import React from 'react';
import { Post } from '../components/PostCard';

interface PageProps {
  params: {
    postId: string;
  };
}
export default async function page({ params }: PageProps) {
  const data = await fetch(
    process.env.NEXT_PUBLIC_SERVER_URL + '/posts/' + params.postId,
  );
  const post: Post = await data.json();
  return (
    <div>
      <h1 className="text-2xl font-bold capitalize pb-5">{post.title}</h1>
      <p className="capitalize">{post.body}</p>
    </div>
  );
}
