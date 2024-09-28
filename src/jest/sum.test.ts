import { sum } from "./sum";

// 数値
it("1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});

it.each`
  a    | b    | expected
  ${1} | ${2} | ${3}
  ${2} | ${2} | ${4}
  ${3} | ${2} | ${5}
`("$aと$bを足すと$expectedになる", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
