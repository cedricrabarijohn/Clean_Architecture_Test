const userController = require("../../controllers/User");

const makeRoute = ({ router }) => {
  return (route = () => {
    const userList = userController.listUser;

    router.get("/v1", userList);
    return router;
  });
};

module.exports = makeRoute;
