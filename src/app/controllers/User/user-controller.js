const { listUser } = require("../../use-cases/User");

const makeList = () => {
  return (list = async (req, res, next) => {
    const list = await listUser();
    res.json(list);
  });
};

module.exports = {
  makeList,
};
