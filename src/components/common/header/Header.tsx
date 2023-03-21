import { Heading, HStack, Input, Spacer, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Term } from "../../../utils/types";
import CalendarButton from "../../atoms/CalendarButton";
import DarkModeButton from "../../atoms/DarkModeButton";
import MessagesButton from "../../atoms/MessagesButton";
import NotificationButton from "../../atoms/NotificationButton";
import ProfileButton from "../../atoms/ProfileButton";
import TermSelector from "../../atoms/TermSelector";

const HeaderButtons = () => {
  return (
    <HStack spacing={0}>
      <DarkModeButton />
      <MessagesButton />
      <CalendarButton />
      <NotificationButton />
      <ProfileButton />
    </HStack>
  );
};

const Header = ({
  term,
  setTerm,
  searchPrompt,
  setSearchPrompt,
}: {
  term: Term;
  setTerm: (term: Term) => void;
  searchPrompt: string;
  setSearchPrompt: (searchPrompt: string) => void;
}) => {
  const navigate = useNavigate();

  return (
    <HStack w="100%" p={4}>
      <VStack align="start">
        <Heading
          fontWeight="light"
          size="xl"
          onClick={() => navigate("/")}
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
        >
          DimSpace
        </Heading>
        <TermSelector term={term} setTerm={setTerm} />
      </VStack>
      <Spacer />
      <Input
        placeholder="Search"
        w="50%"
        size="lg"
        variant="filled"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <Spacer />
      <HeaderButtons />
    </HStack>
  );
};

export default Header;
