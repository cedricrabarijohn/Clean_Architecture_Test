const userRouter = require("./User");

const makeGlobalRouter = ({ router }) => {
  return (globalRouter = () => {
    const user = userRouter()
    router.use("/user", user);
    return router;
  });
};

module.exports = makeGlobalRouter;
