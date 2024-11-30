import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {

const updateAssignment = async (req, res) => {
  const { assignmentId } = req.params;
  const assignmentUpdates = req.body;
  await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
  res.sendStatus(204);
};
app.put("/api/assignments/:assignmentId", updateAssignment);

const deleteAssignment = async (req, res) => {
   const { assignmentId } = req.params;
   await assignmentsDao.deleteAssignment(assignmentId);
   res.sendStatus(204);
};
app.delete("/api/assignments/:assignmentId", deleteAssignment);
}