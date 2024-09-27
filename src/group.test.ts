describe("配列テスト", () => {
  it("配列のpush", () => {
    const a: number[] = [];
    a.push(1);
    expect(a).toEqual([1]);
  });

  it("配列長さが取得できる", () => {
    const a: number[] = [1, 2, 3];
    expect(a.length).toBe(3);
  });

  it("配列の要素indexを検索できる", () => {
    const a: number[] = [1, 2, 3];
    expect(a.indexOf(2)).toBe(1);
  });
});
