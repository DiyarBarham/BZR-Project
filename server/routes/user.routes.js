const UserController = require("../controllers/user.controller");

module.exports = function (app) {
  app.put("/api/user/:id/update", UserController.updateExistingUser);
  app.post("/api/user/register", UserController.register);
  app.post("/api/user/login", UserController.login);
  app.get("/api/users", UserController.getAll);
  app.get("/api/get/:id", UserController.findUser);
  app.get("/api/user/logout", UserController.logout);
};
