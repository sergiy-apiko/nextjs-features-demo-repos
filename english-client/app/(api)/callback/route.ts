import { Request } from 'express';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json({ logout: true });
}
