var request = require("supertest");
var app = require("../src/server.js");

describe("GET /", function () {
  it("respond with hello world", async function () {
    const response = await request(app).get("/");

    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual("Hello World 2");
  });
});