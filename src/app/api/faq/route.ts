import { connectDB } from "@/lib/db";
import Faq from "@/models/Faq";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const faqs = await Faq.find().sort({ createdAt: -1 });

    return NextResponse.json(faqs, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const { question, answer } = await req.json();

    // ✅ validation
    if (!question || !answer) {
      return NextResponse.json(
        { message: "Question and Answer are required" },
        { status: 400 }
      );
    }

    const faq = await Faq.create({ question, answer });

    return NextResponse.json(
      { message: "FAQ added successfully", faq },
      { status: 201 }
    );

  } catch (error) {
    console.error("FAQ POST ERROR:", error);

    return NextResponse.json(
      { message: "Something went wrong while adding FAQ" },
      { status: 500 }
    );
  }
}
