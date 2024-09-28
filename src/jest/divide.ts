export class ZeroDivisorError extends Error {}

export const divide = (dividend: number, divisor: number) => {
  if (divisor == 0) throw new ZeroDivisorError("0では割れません");
  return dividend / divisor;
};
