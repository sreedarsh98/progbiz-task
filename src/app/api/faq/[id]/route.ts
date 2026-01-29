import { connectDB } from "@/lib/db";
import Faq from "@/models/Faq";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    await connectDB();

    // ✅ extract id from URL
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { message: "ID not provided" },
        { status: 400 }
      );
    }

    const deleted = await Faq.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { message: "FAQ not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "FAQ deleted successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("DELETE ERROR:", error);

    return NextResponse.json(
      { message: "Delete failed" },
      { status: 500 }
    );
  }
}
