const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
};
const module = {
    id: "ABC", title: "TestModule",
    description: "This is a test module, woohoo", course: "CS5610",
}
  export default function WorkingWithObjects(app) {
    //Assignment
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
      }); 
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params;
        assignment.score = newScore;
        res.json(assignment);
    });
    app.get("/lab5/assignment/completed/:newCompleted", (req, res) => {
        const { newCompleted } = req.params;
        assignment.completed = newCompleted;
        res.json(assignment);
    });
    //Module
    app.get("/lab5/module", (req, res) => {
        res.json(module);
    }); 
    app.get("/lab5/module/title", (req, res) => {
        res.json(module.title);
      });    
    app.get("/lab5/module/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        module.title = newTitle;
        res.json(module);
    });
    app.get("/lab5/module/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        module.description = newDescription;
        res.json(module);
    });
};
  
  