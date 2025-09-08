import { NextResponse } from 'next/server';
import {discuss} from "@/lib/api/mistral"


export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const result = await discuss(message, process.env.MISTRAL_AI_MODEL || "mistral-small-2503");

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 400 });
  }
}