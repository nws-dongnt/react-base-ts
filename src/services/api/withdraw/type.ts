export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type ListUserParams = {
  page: number;
};

export type UserListResponseType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserType[];
  support: {
    url: string;
    text: string;
  };
};
