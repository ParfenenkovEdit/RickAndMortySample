import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Heading,
  chakra,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Character } from "../types";
import { Loader, ProgressiveImage } from "../components";
import { colors } from "../consts";

export const CharacterPage = () => {
  const character = useLoaderData() as Character;
  const navigation = useNavigation();
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      w="100%"
      gap="20px"
    >
      <Heading size="md">This is personal page of {character?.name}</Heading>
      <Card w="250px" boxShadow={`0px 0px 3px ${colors.lightGray}`}>
        <CardBody>
          <ProgressiveImage src={character.image} />
        </CardBody>
        <CardFooter>
          <VStack gap="5px" align="start">
            <Heading size="xm">Currently living on:</Heading>
            <Text>{character.location.name}</Text>
          </VStack>
        </CardFooter>
      </Card>
      <GoBackButton onClick={handleGoBack} w="250px">
        Go back
      </GoBackButton>
    </Flex>
  );
};

const GoBackButton = chakra(Button, {
  baseStyle: {
    width: "250px",
    height: "50px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.black,
    backgroundColor: colors.white,
    border: `1px solid ${colors.hoverMain}`,
    _hover: {
      backgroundColor: colors.hoverMain,
      color: colors.white,
    },
  },
});
