import { RootState, key } from "reduxx/store";
import { AuthState } from "reduxx/authReducer";

const storageKey = `persist:${key}`;

export const readState = (): RootState | undefined => {
  try {
    const data = localStorage.getItem(storageKey);
    const json = JSON.parse(data || "") as { auth: string };
    const auth = JSON.parse(json.auth) as AuthState;
    return { ...json, auth } as RootState;
  } catch (e) {
    return undefined;
  }
};

export const writeToken = (token: string) => {
  try {
    const state = readState();
    const newState = {
      ...(state || {}),
      auth: JSON.stringify({
        ...(state?.auth || {}),
        user: {
          ...(state?.auth?.user || {}),
          accessToken: token,
        },
      }),
    };
    localStorage.setItem(storageKey, JSON.stringify(newState));
  } catch {
    //
  }
};

export const readToken = (): string => {
  return readState()?.auth?.user?.accessToken || "";
};
