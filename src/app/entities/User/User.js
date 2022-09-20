const buildMakeUser = ({ mongoose }) => {
  return (makeUser = ({ firstName, lastName } = {}) => {
    const user = new mongoose.Schema(
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        yearOfBirth: {
          type: Number
        }
      },
      { collection: "user" }
    );
    const UserModel = mongoose.models.user || mongoose.model("user", user);
    const newUser = new UserModel({ firstName, lastName });
    return Object.freeze({
      User: newUser,
      UserModel: UserModel,
    });
  });
};

module.exports = buildMakeUser;
