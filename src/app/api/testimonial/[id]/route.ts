import { connectDB } from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { NextResponse } from "next/server";

// optional GET (fixes routing bug)
export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const id = req.url.split("/").pop();

    const deleted = await Testimonial.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { message: "Testimonial not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "Delete failed" },
      { status: 500 }
    );
  }
}
