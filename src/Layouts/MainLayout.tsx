import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Navigation } from "../components";

export const MainLayout = () => {
  return (
    <Flex minHeight="100vh" w="100wh">
      <Navigation />
      <Outlet />
    </Flex>
  );
};
