type ResponseInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type ListResponse<T> = {
  info: ResponseInfo;
  results: T[];
};

export type Response<T> = T;
