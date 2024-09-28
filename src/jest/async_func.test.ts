import { delay } from "./async_func";

it("0以上の値を渡されるとメッセージが返される", async () => {
  const res = await delay("test", 1000);
  expect(res).toBe("test");
});

it("0未満を渡すとエラーが返される", async () => {
  try {
    const res = await delay("test", -1);
  } catch (e: any) {
    expect(e.message).toBe("0以上の値を渡してください");
  }
});
