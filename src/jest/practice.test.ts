import { ShoppingList } from "./practice";

it("アイテムをリストに追加することができる", () => {
  const shoppingList = new ShoppingList();
  shoppingList.addItem("a");
  expect(shoppingList.list).toEqual(["a"]);
});

it("アイテムをリストから削除することができる", () => {
  const shoppingList = new ShoppingList();
  shoppingList.addItem("a");
  shoppingList.addItem("b");
  shoppingList.removeItem("a");
  expect(shoppingList.list).toEqual(["b"]);
});

it("存在しないアイテムの削除をしようとしたときにエラーをスローすることができる", () => {
  const shoppingList = new ShoppingList();
  shoppingList.addItem("a");
  shoppingList.addItem("b");
  expect(() => shoppingList.removeItem("c")).toThrow();
});
