export function makeId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const initialItems = [
  "ZRO6jw",
  "3d6qDJ",
  "Y6TGYO",
  "2JMCA4",
  "kfyVos",
  "ofPyTy",
  "cThKdz",
  "I8KDWl",
];
