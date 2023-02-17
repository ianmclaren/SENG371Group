import { CalendarIcon } from "@chakra-ui/icons";
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

const CalendarButton = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          fontSize="xl"
          icon={<CalendarIcon />}
          aria-label="Calendar"
          _hover={{ bg: "transparent", color: "gray.600" }}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Calendar</PopoverHeader>
        <PopoverBody>
          <Text>You do not have anything due yet</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CalendarButton;
