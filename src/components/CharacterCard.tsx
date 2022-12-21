import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ProgressiveImage } from "./ProgressiveImage";
import { colors } from "../consts";

type Props = {
  name: string;
  id: number;
  image: string;
};

export const CharacterCard = ({ name, id, image }: Props) => {
  const navigate = useNavigate();
  const handleGoToPersonalPage = () => navigate(`/characters/${id}`);

  return (
    <Card w="250px" boxShadow={`0px 0px 3px ${colors.lightGray}`}>
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>
      <CardBody>
        <ProgressiveImage src={image} />
      </CardBody>
      <CardFooter
        cursor="pointer"
        onClick={handleGoToPersonalPage}
        borderTop={`1px solid ${colors.lightGray}`}
        _hover={{
          backgroundColor: colors.hoverMain,
          color: colors.white,
        }}
      >
        <Text>Go to personal page</Text>
      </CardFooter>
    </Card>
  );
};
