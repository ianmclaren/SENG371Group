import {
  Button,
  HStack,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProfileButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      aria-label="Profile"
      _hover={{ bg: "transparent", color: "gray.600" }}
      leftIcon={
        <Icon
          fontSize="xl"
          as={BsPersonFill}
          aria-label="Profile"
          _hover={{ bg: "transparent", color: "gray.600" }}
        />
      }
      onClick={() => navigate("/profile")}
    >
      John Smith
    </Button>
  );
};

export default ProfileButton;
