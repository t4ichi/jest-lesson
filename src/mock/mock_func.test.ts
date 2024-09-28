import { calculator } from "./calculator";
import * as fs from "fs";
import { readFile } from "./mock_module";

it("mock関数", () => {
  const mockFunc = jest.fn(() => "Hello mock");
  expect(mockFunc()).toBe("Hello mock");
});

it("mockImplementation", () => {
  const mockFunc = jest.fn();
  mockFunc.mockImplementation(() => "Hello mock2");
  expect(mockFunc()).toBe("Hello mock2");
});

it("mock関数の戻り値が設定できる", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("mock");
  expect(mockFunc()).toBe("mock");
});

it("mock関数に一度だけ戻り値が返される", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("mock");
  expect(mockFunc()).toBe("mock");
  expect(mockFunc()).toBe(undefined);
});

it("mock関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("mock");
  const res = await mockFunc();
  expect(res).toBe("mock");
});

it("mock関数が呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  expect(mockFunc).toHaveBeenCalled();
});

it("mock関数が2回呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  expect(mockFunc).toHaveBeenCalledTimes(2);
});

it("mock関数に引数としてhogeが渡される", () => {
  const mockFunc = jest.fn();
  mockFunc("hoge");
  expect(mockFunc).toHaveBeenCalledWith("hoge");
});

it("sumメソッドが呼び出される", () => {
  const spy = jest.spyOn(calculator, "sum");
  const sum = calculator.sum(1, 2);
  expect(sum).toBe(3);
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith(1, 2);

  spy.mockRestore();
});

jest.mock("fs");
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("hoge");

// module全体のmock化
it("readFileがデータを返す", () => {
  const res = readFile("path/hoge");
  expect(res).toBe("hoge");
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});
