import { NavLink } from "react-router-dom";
import { List, chakra } from "@chakra-ui/react";
import { colors } from "../consts";

export const Navigation = () => {
  const handleActiveStyle = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return { backgroundColor: colors.hoverMain, color: colors.white };
    }

    return {};
  };

  return (
    <NavList>
      <NavItem to="/characters" style={handleActiveStyle}>
        characters
      </NavItem>
    </NavList>
  );
};

const NavList = chakra(List, {
  baseStyle: {
    width: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    borderRight: `1px solid ${colors.lightGray}`,
    padding: "20px",
  },
});

const NavItem = chakra(NavLink, {
  baseStyle: {
    textAlign: "center",
    padding: "10px",
    width: "150px",
    border: "1px solid",
    borderColor: colors.lightGray,
    borderRadius: "6px",
    cursor: "pointer",
    _hover: {
      backgroundColor: "#8A2BE2",
      color: "#FFF",
    },
  },
});
