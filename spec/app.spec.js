process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest");
const chai = require("chai");
const chaiSorted = require("chai-sorted");
const { expect } = chai;
chai.use(chaiSorted);
const knex = require("../db/connection");

describe("/api", () => {
  beforeEach(() => knex.seed.run());
  after(() => knex.destroy());
  describe("GET", () => {
    describe("/api/name", () => {
      it("status code: 200, returns quote by name", () => {
        return request(app)
          .get("/api/quotes/Beyonce")
          .expect(200)
          .then(({ body }) => {
            expect(body.quote[0]).to.eql({
              name: "Beyonce",
              quote:
                "The reality is: sometimes you lose. And you’re never too good to lose. You’re never too big to lose. You’re never too smart to lose. It happens."
            });
          });
      });
    });
  });
});
