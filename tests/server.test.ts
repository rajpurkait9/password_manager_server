import { describe, expect, test } from "@jest/globals";
import { sum } from "../controllers/User/registerUser";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(2, 7)).toBe(9);
  });
});
