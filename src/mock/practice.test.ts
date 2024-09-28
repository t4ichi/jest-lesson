import axios from "axios";
import Users from "./practice";
import { clearMocks } from "../../jest.config";

// 回答
// jest.mock("axios");

// it("axios.getが期待された値を返す", async () => {
//   const mockData = { data: [{ id: 1, name: "John Doe" }] };
//   (axios.get as jest.Mock).mockResolvedValue(mockData);
//   const res = await Users.all();
//   expect(res).toEqual(mockData.data);
// });

// 解答例
jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("Users", () => {
  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  it("Userを取得できる", async () => {
    const users = { data: [{ name: "Taro" }, { name: "Hanako" }] };
    mockAxios.get.mockResolvedValue(users);

    const res = await Users.all();
    expect(res).toEqual(users.data);
    expect(mockAxios.get).toHaveBeenCalledWith("/users.json");
  });
});
