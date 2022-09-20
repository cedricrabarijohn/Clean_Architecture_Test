describe("User router test", () => {
  it("Should be a valid user router", () => {
    const route = require("./index");
    expect(route()).toEqual(
      expect.objectContaining({
        stack: expect.arrayContaining([
          expect.objectContaining({
            regexp: expect.any(RegExp),
          }),
        ]),
      })
    );
  });
});
