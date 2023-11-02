const Path = {
  login: "/login",
  home: "/",
  sample: "/sample",
  listPageExample: "/list-page-example",
  user: "/users",
  userDetail: (userId?: string) => `/users/${userId || ":userId"}`,
  userDetailEdit: (userId?: string) => `/users/${userId || ":userId"}/edit`,
};

export const PathMap = (() => {
  const newPath = Path as {
    [key: string]: string | ((...args: Array<string>) => string);
  };
  const map: { [key: string]: boolean } = {};
  Object.keys(newPath).forEach((key) => {
    if (typeof newPath[key] === "function") {
      const value = (newPath[key] as (...args: Array<string>) => string)();
      map[value] = true;
    } else {
      map[newPath[key] as string] = true;
    }
  });
  return map;
})();

export default Path;
