import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String },
    tag: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
