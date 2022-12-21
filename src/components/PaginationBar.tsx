import { Button, chakra, Flex, Text } from "@chakra-ui/react";
import { colors } from "../consts";

type Props = {
  hasNext: boolean;
  hasPrev: boolean;
  currentPage: number;
  handlePageChange: (page: number) => void;
};

export const PaginationBar = ({
  hasNext,
  hasPrev,
  currentPage,
  handlePageChange,
}: Props) => {
  const handleGoPrev = () => handlePageChange(currentPage - 1);
  const handleGoNext = () => handlePageChange(currentPage + 1);
  return (
    <Flex gap="10px">
      <PaginationButton onClick={handleGoPrev} isDisabled={!hasPrev}>
        {"<"}
      </PaginationButton>
      <Text my="auto">{currentPage}</Text>
      <PaginationButton onClick={handleGoNext} isDisabled={!hasNext}>
        {">"}
      </PaginationButton>
    </Flex>
  );
};

const PaginationButton = chakra(Button, {
  baseStyle: {
    width: "50px",
    height: "50px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.black,
    backgroundColor: colors.white,
    boxShadow: `0px 0x 5px ${colors.lightGray}`,
    _hover: {
      backgroundColor: colors.hoverMain,
      color: colors.white,
    },
  },
});
