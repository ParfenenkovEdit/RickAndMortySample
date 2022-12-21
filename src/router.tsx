import { createBrowserRouter, LoaderFunction } from "react-router-dom";
import { characterApi } from "./api/characterApi";
import { MainLayout } from "./Layouts";
import { CharactersPage, RootPage, CharacterPage } from "./pages";
import { Character, Response } from "./types";

const characterLoader: LoaderFunction = async ({ params }) => {
  const charackerId = Number(params.id);
  // trick moment as axios response doesn't matter about interceptors
  const response = (await characterApi.getCharacterById({
    id: charackerId,
  })) as unknown as Response<Character>;
  return response;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: "/characters",
        element: <CharactersPage />,
      },
      {
        path: "/characters/:id",
        loader: characterLoader,
        element: <CharacterPage />,
      },
    ],
  },
]);
