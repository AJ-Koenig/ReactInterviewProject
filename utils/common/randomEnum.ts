const randomEnumKey = (enumeration: { [x: string]: any }) => {
  const keys = Object.keys(enumeration).filter(
    (k) => !(Math.abs(Number.parseInt(k)) + 1)
  );
  return keys[Math.floor(Math.random() * keys.length)];
};

const randomEnum = (enumeration: { [x: string]: any }) =>
  enumeration[randomEnumKey(enumeration)];

export default randomEnum;
