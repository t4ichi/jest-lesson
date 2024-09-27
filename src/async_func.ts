export const delay = (message: string, time: number) => {
  return new Promise((resove, reject) => {
    if (time >= 0) {
      setTimeout(() => resove(message), time);
    } else {
      reject(new Error("0以上の値を渡してください"));
    }
  });
};
