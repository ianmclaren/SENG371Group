import { BellIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
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
import { useMemo } from "react";
import { sampleCourses } from "../../utils/sampleData";

const NotificationButton = () => {
  const notifications = useMemo(() => {
    const init: {
      message: string;
      course: string;
    }[] = [];
    return sampleCourses.reduce((acc, currVal) => {
      return currVal.notifications
        ? acc.concat(
            currVal.notifications.map((val) => ({
              message: val,
              course: currVal.name,
            }))
          )
        : acc;
    }, init);
  }, []);

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
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <Box key={index}>
                <Text fontWeight="bold">{notification.course}</Text>
                <Text>{notification.message}</Text>
                {index !== notifications.length - 1 && <Divider my={2} />}
              </Box>
            ))
          ) : (
            <Text>You do not have any notifications yet</Text>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationButton;
