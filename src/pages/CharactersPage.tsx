import { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { characterApi } from "../api/characterApi";
import { Loader, CharacterCard, PaginationBar } from "../components";
import { useApi } from "../hooks";
import { Character, ListResponse } from "../types";

export const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data, onApiCall } = useApi<
    { page: number },
    ListResponse<Character>
  >({
    api: characterApi.getCharacters,
    isInitialLoading: true,
  });

  const handlePageChange = (page: number) => setPage(page);

  useEffect(() => {
    onApiCall({ page });
  }, [page]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Flex direction="column" gap="20px" padding="20px">
      {data?.info && (
        <PaginationBar
          handlePageChange={handlePageChange}
          hasNext={!!data.info.next}
          hasPrev={!!data.info.prev}
          currentPage={page}
        />
      )}
      <Flex
        justify="start"
        align="center"
        gap="20px"
        w="100%"
        h="100%"
        flexWrap="wrap"
      >
        {data?.results.map(({ name, id, image }) => {
          return <CharacterCard name={name} id={id} image={image} key={id} />;
        })}
      </Flex>
    </Flex>
  );
};
