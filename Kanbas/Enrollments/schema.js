import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema(
 {
   user:   { type: mongoose.Schema.Types.String, ref: "UserModel"   },
   course: { type: mongoose.Schema.Types.String, ref: "CourseModel" },
   grade: Number,
   letterGrade: String,
   enrollmentDate: Date,
   status: {
     type: String,
     enum: ["ENROLLED", "DROPPED", "COMPLETED"],
     default: "ENROLLED",
   },
 },
 { collection: "enrollments" }
);
export default enrollmentSchema;

