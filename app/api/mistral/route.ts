import { NextResponse } from 'next/server';
import {discuss} from "@/lib/api/mistral"


export async function POST(request: Request) {
  try {
    const { message, model } = await request.json();

    const result = await discuss(message, model);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 400 });
  }
}