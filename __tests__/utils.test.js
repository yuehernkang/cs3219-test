// src/__tests__/utils.test.js
const sum = require("../app/utils");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
