import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { phone, password } = await req.json();

  await connectDB();

  const user = await User.findOne({ phone });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 401 });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  const token = signToken({ id: user._id });

  const res = NextResponse.json({ message: "Login success" });
  res.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
  });

  return res;
}
