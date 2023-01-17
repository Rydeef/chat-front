export const getRandomColor = (arr: string[]) => {
  return arr[Math.round(Math.random() * arr.length)];
};
