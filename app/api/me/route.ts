import { NextResponse } from 'next/server';
import {discuss} from "@/lib/api/mistral"
import { getMe } from '@/lib/api/auth';

export async function GET() {
  try {
    const user = getMe();
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 400 });
  }
}