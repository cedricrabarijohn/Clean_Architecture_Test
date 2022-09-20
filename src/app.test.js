const request = require("supertest");
const app = require("./app");

describe("User API", () => {
  it("Get /users --> array of users", () => {
    return request(app)
      .get("/user/v1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining(
            {
                _id:expect.any(String),
                firstName: expect.any(String),
                lastName: expect.any(String),
                age: expect.any(Number)
            }
          )])
        );
      });
  });
});