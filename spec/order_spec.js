import { handleInput, clearInput } from '../Order.js';

describe("Restaurant Order Bot", function () {

  beforeEach(function () {
    clearInput();
  });

  it("welcome message", function () {
    const aResults = handleInput("hello");
    expect(aResults[0]).toContain("Welcome");
  });

  it("order taco", function () {
    handleInput("hello");
    const aResults = handleInput("taco");
    expect(aResults[0]).toContain("size taco");
  });

  it("drink upsell", function () {
    handleInput("hello");
    handleInput("taco");
    handleInput("small");
    handleInput("chicken");
    const aResults = handleInput("coke");
    expect(aResults[1]).toContain("confirmed");
  });

});