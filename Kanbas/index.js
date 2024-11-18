import Courses from "./Database/courses.js";
import Modules from "./Database/modules.js";

export default function Kanbas(app) {
    app.get("/courses", (req, res) => {
        const courses = Courses;
      res.send(courses);
    });
    app.get("/courses/:courseId", (req, res) => {
        const {courseId} = req.params
        const course = Courses.find((course) => course._id === (courseId));
        res.json(course);
    });
    app.get("/modules", (req, res) => {
        const modules = Modules;
      res.send(modules);
    });
    app.get("/modules/:moduleId", (req, res) => {
        const {moduleId} = req.params
        const module = Modules.find((module) => module._id === (moduleId));
        res.json(module);
    });
};