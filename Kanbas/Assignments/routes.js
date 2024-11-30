import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {

const deleteAssignment = async (req, res) => {
   const { assignmentId } = req.params;
   await assignmentsDao.deleteAssignment(assignmentId);
   res.sendStatus(204);
};
app.delete("/api/assignments/:assignmentId", deleteAssignment);
}