import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    await modulesDao.updateModule(moduleId, moduleUpdates);
    res.sendStatus(204);
  };
  app.put("/api/modules/:moduleId", updateModule);
        
  const deleteModel = async (req, res) => {
   const { moduleId } = req.params;
   await modulesDao.deleteModule(moduleId);
   res.sendStatus(204);
  };
  app.delete("/api/modules/:moduleId", deleteModel);
}

