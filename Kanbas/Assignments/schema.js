import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    title: String,
    course: String,
    description: String,
    points: Integer,
    dueDate: String,
    dueDateString: String,
    availableDate: String,
    availableDateString: String,
  },
  { collection: "assignments" }
);
export default assignmentSchema;

