import { Box, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import { Course } from "../../utils/types";
import CompletedBadge from "../atoms/CompletedBadge";
import NotificationAlert from "../atoms/NotificationAlert";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <VStack
      border="1px"
      borderColor="gray.400"
      minW="250px"
      maxW="400px"
      flexGrow={1}
      h="200px"
      shadow="md"
      _hover={{ shadow: "xl" }}
      transition="all 0.1s ease-in-out"
      borderRadius="md"
      cursor="pointer"
      align="start"
      pos="relative"
      bgColor={course.color ?? "gray.100"}
    >
      {course.completed && <CompletedBadge />}
      <Spacer />
      <Box bgColor="gray.200" w="100%" p={3}>
        {course.notifications && (
          <NotificationAlert messages={course.notifications} />
        )}
        <Heading fontWeight="medium">{course.name}</Heading>
        <Text fontSize="lg">{course.professor}</Text>
      </Box>
    </VStack>
  );
};

export default CourseCard;
