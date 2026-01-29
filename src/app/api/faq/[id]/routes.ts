import { connectDB } from "@/lib/db";
import Faq from "@/models/Faq";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const faq = await Faq.findById(params.id);
  return NextResponse.json(faq);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const body = await req.json();

  const faq = await Faq.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  );

  return NextResponse.json(faq);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  await Faq.findByIdAndDelete(params.id);

  return NextResponse.json({ success: true });
}
