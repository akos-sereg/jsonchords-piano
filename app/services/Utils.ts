export const clone = (obj: any) => JSON.parse(JSON.stringify(obj));

export const sleep = async (milliseconds: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, milliseconds);
  });
