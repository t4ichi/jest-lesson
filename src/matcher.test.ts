// 文字列
it("文字列テスト", () => {
  expect("hoge").toBe("hoge");
});

// bool値テスト
it("bool値テスト", () => {
  expect(true).toBe(true);
});

// Equal 配列
it("Equal配列テスト", () => {
  const A = [1, 2, 3];
  const B = [1, 2, 3];
  expect(A).toEqual(B);
});

// Equal オブジェクト
it("Equalオブジェクトテスト", () => {
  const A = {
    a: 1,
    b: 2,
  };
  const B = {
    a: 1,
    b: 2,
  };
  expect(A).toEqual(B);
});
