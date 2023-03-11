import { WarningTwoIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Icon,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";

const NotificationAlert = ({ messages }: { messages: string[] }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Icon
          as={WarningTwoIcon}
          color="orange.500"
          fontSize="xl"
          _hover={{ color: "orange.800" }}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Announcements</PopoverHeader>
        <PopoverContent>
          <Box p={3}>
            {messages.map((message, index) => (
              <Box key={index}>
                <Text>{message}</Text>
                {index !== messages.length - 1 && <Divider my={2} />}
              </Box>
            ))}
          </Box>
        </PopoverContent>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationAlert;
