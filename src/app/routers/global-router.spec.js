describe("Global router test", () => {
  it("Should be a valid router", () => {
    const makeGlobalRouter = require("./global-router");
    const express = require("express");
    const userRouter = require("./User");
    const globalRouter = makeGlobalRouter({
      router: express.Router(),
      userRouter,
    });
  });
});
