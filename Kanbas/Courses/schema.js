import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    number: String,
    name: { type: String, required: true, unique: true },
    startDate: String,
    endDate: String,
    department: String,
    credit: Integer,
    Description: String,
  },
  { collection: "courses" }
);
export default courseSchema;

