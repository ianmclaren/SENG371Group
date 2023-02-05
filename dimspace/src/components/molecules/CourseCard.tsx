import { Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import { Course } from "../../utils/types";
import CompletedBadge from "../atoms/CompletedBadge";
import NotificationAlert from "../atoms/NotificationAlert";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <VStack
      p={4}
      border="1px"
      borderColor="gray.400"
      w="250px"
      h="200px"
      shadow="md"
      _hover={{ shadow: "xl" }}
      borderRadius="md"
      cursor="pointer"
      align="start"
      pos="relative"
    >
      {course.completed && <CompletedBadge />}
      <Spacer />
      {course.notifications && (
        <NotificationAlert messages={course.notifications} />
      )}
      <Heading fontWeight="light">{course.name}</Heading>
      <Text>{course.professor}</Text>
    </VStack>
  );
};

export default CourseCard;
