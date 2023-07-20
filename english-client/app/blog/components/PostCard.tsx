'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{post.body.slice(0, 130) + '...'}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.id}`} className={'text-gray-700 font-bold'}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};
