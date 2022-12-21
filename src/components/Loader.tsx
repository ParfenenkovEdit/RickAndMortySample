import { Spinner, Flex } from "@chakra-ui/react";
import { colors } from "../consts";

export const Loader = () => {
  return (
    <Flex w="100%" align="center" justify="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor={colors.lightGray}
        color={colors.hoverMain}
        w="100px"
        h="100px"
      />
    </Flex>
  );
};
