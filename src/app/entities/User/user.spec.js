const { models } = require("mongoose");
const makeUser = require(".");

describe("User entity", () => {
  it("Create an User entity", () => {
    const userPayload = {
      firstName: "Cedric",
      lastName: "Rabarijohn",
    };
    const user = makeUser({
      ...userPayload,
    })

    const res = {
      firstName: user.User.firstName,
      lastName: user.User.lastName,
    };
    
    expect(res).toEqual({
      firstName: expect.any(String),
      lastName: expect.any(String),
    });
  });
  
  it('Create an instance of a mongoose user entity (User model)',()=>{
    const user = makeUser({}).UserModel
    expect(user).toEqual(models.user)
  })

});
