import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.post("/enroll", (req, res) => {
    const { userId, courseId } = req.body;
        enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.sendStatus(204);
    });

    app.post("/unenroll", (req, res) => {
    const { userId, courseId } = req.body;
        enrollmentsDao.unenrollUserInCourse(userId, courseId);
        res.sendStatus(204);
    });
}