import { NextRequest, NextResponse } from "next/server";
import { verifyCredentials } from "@/lib/auth";

const SESSION_COOKIE = "session";
const SESSION_VALUE = "ok";

export async function POST(request: NextRequest) {
  let body: { id?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const id = typeof body.id === "string" ? body.id.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!id || !password) {
    return NextResponse.json(
      { error: "아이디와 비밀번호를 입력하세요." },
      { status: 400 }
    );
  }

  const ok = await verifyCredentials(id, password);
  if (!ok) {
    return NextResponse.json(
      { error: "아이디 또는 비밀번호가 올바르지 않습니다." },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, SESSION_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
