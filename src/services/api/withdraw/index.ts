import { AxiosResponse } from "axios";
import client from "services/api/client";
import { ListUserParams, UserListResponseType } from "./type";

export const getListUser = (
  params: ListUserParams,
): Promise<AxiosResponse<UserListResponseType>> => {
  return client.get("/users", { params });
};

export const dummy = "";
