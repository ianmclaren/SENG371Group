import { ChatIcon } from "@chakra-ui/icons";
import {
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

const MessagesButton = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          fontSize="xl"
          icon={<ChatIcon />}
          aria-label="Messages"
          _hover={{ bg: "transparent", color: "gray.600" }}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Messages</PopoverHeader>
        <PopoverBody>
          <Text>You do not have any messages yet</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default MessagesButton;
