import { Heading, HStack, IconButton, Spacer, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CalendarButton from "../atoms/CalendarButton";
import MessagesButton from "../atoms/MessagesButton";
import NotificationButton from "../atoms/NotificationButton";
import ProfileButton from "../atoms/ProfileButton";

const HeaderButtons = () => {
  return (
    <HStack spacing={0}>
      <MessagesButton />
      <CalendarButton />
      <NotificationButton />
      <ProfileButton />
    </HStack>
  );
};

const Header = () => {
  const navigate = useNavigate();
  return (
    <HStack w="100%" p={4}>
      <VStack align="start">
        <Heading
          fontWeight="light"
          size="xl"
          onClick={() => navigate("/")}
          cursor="pointer"
        >
          DimSpace
        </Heading>
        <Heading fontWeight="light" size="md">
          Summer 2023
        </Heading>
      </VStack>
      <Spacer />
      <HeaderButtons />
    </HStack>
  );
};

export default Header;
