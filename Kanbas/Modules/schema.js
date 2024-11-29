import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: String,
    course: String,
    lessons: {
      id: String,
      description: String,
      module: String,
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
  },
  { collection: "modules" }
);
export default moduleSchema;

