export const isSameSearchParams = (
  param1: URLSearchParams,
  param2: URLSearchParams,
) => {
  const keys = Array.from(param1.keys());
  if (keys.length !== Array.from(param2.keys()).length) {
    return false;
  }
  for (let index = 0; index < keys.length; index += 1) {
    if (param1.get(keys[index]) !== param2.get(keys[index])) {
      return false;
    }
  }
  return true;
};

export const dummy = "";
