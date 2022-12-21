import { http } from "./http";

export const characterApi = {
  getCharacters: ({ page }: { page: number }) => {
    return http.get(`/character/?page=${page}`);
  },
  getCharacterById: ({ id }: { id: number }) => {
    return http.get(`/character/${id}`);
  },
};
