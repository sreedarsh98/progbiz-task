import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { phone, password } = await req.json();

  if (!phone || !password) {
    return NextResponse.json({ message: "All fields required" }, { status: 400 });
  }

  await connectDB();

  const exist = await User.findOne({ phone });
  if (exist) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const hash = await bcrypt.hash(password, 10);

  await User.create({ phone, password: hash });

  return NextResponse.json({ message: "Signup success" });
}
