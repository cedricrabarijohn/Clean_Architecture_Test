const makeUser = require("../../entities/User");
const makeListUser = () => {
  return (listUser = async (userInfo = {}) => {
    const UserModel = makeUser(userInfo).UserModel;
    const list = await UserModel.find();
    const listUser = list.map((user) => {
      return {
        ...user._doc,
        age: 2022 - user.yearOfBirth,
      };
    });
    console.log(listUser);
    return listUser;
  });
};

module.exports = makeListUser;
