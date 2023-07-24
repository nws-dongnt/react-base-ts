import socketio, { SocketOptions, ManagerOptions } from "socket.io-client";

export enum ESocketListener {
  DISCONNECT = "disconnect",
  USER_BALANCE = "balance_user_info",
  SAMPLE1 = "SAMPLE1",
  SAMPLE2 = "SAMPLE2",
}

export enum ESocketNameSpace {
  NOTIFICATION = "notification",
  AUTH = "auth",
  GAME = "game",
}

export type UserBalanceEventData = {
  amount: number;
  rankingPoints?: number;
  rankingLevel?: number;
};

export const socketIO = (
  namespace: ESocketNameSpace,
  extraOptions?: Partial<ManagerOptions & SocketOptions>,
) => {
  let uri = "";

  // check hostname (api url for socket)
  let hostname = process.env.REACT_APP_SOCKET_URI || "";

  // add '/' at the end of hostname if needed
  if (hostname.charAt(hostname.length - 1) !== "/") hostname += "/";

  // add namespace to socket uri
  uri = hostname + namespace;

  let clientPublicKey = localStorage.getItem("client-public-key");

  if (!clientPublicKey) {
    clientPublicKey = `${new Date().getTime()}_${Math.random() * 99999}`;
    localStorage.setItem("client-public-key", clientPublicKey);
  }

  const options: Partial<ManagerOptions & SocketOptions> = {
    transports: ["polling"],
    auth: { token: `Bearer <jwt token here>` },
    transportOptions: {
      polling: {
        extraHeaders: {
          "client-public-key": clientPublicKey,
        },
      },
    },
  };

  return socketio(uri, { ...(extraOptions || {}), ...options });
};
