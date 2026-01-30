import { connectDB } from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  return NextResponse.json(testimonials);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const testimonial = await Testimonial.create(body);

  return NextResponse.json(testimonial);
}
