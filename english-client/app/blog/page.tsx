import { Metadata } from 'next';
import React from 'react';
import { Post, PostCard } from './components/PostCard';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read articles on different topics',
  alternates: {
    canonical: 'http://localhost:3001',
  },
};

const BlogPage = async () => {
  const data = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/posts');
  const posts: Post[] = await data.json();
  return (
    <div className="flex flex-wrap gap-2 justify-between">
      {posts.map((post, idx) => {
        return (
          <div className="basis-[49%] " key={idx}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
