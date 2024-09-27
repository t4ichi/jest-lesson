import { divide, ZeroDivisorError } from "./divide";

it("0で割るとエラーになる", () => {
  expect(() => divide(1, 0)).toThrow();
  expect(() => divide(1, 0)).toThrow("0では割れません");
  expect(() => divide(1, 0)).toThrow(ZeroDivisorError);
});
