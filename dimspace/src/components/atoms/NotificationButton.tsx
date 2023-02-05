import { BellIcon } from "@chakra-ui/icons";
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

const NotificationButton = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          fontSize="xl"
          icon={<BellIcon />}
          aria-label="Notifications"
          _hover={{ bg: "transparent", color: "gray.600" }}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Notifications</PopoverHeader>
        <PopoverBody>
          <Text>You do not have any notifications yet</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationButton;
