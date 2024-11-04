import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  return NextResponse.json({ name });
}
