import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
app.put("/api/assignments", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.sendStatus(204);
});
app.put("/api/assignments/:assignmentId", (req, res) => {
  const { assignmentId } = req.params;
  const assignmentUpdates = req.body;
  assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
  res.sendStatus(204);
});
 app.delete("/api/assignments", (req, res) => {
   const { assignmentId } = req.params;
   assignmentsDao.deleteAssignment(assignmentId);
   res.sendStatus(204);
 });
}