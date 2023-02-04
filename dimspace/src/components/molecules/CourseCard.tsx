import { Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import { Course } from "../../utils/types";
import CompletedBadge from "../atoms/CompletedBadge";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <VStack
      p={4}
      border="1px"
      w="250px"
      shadow="md"
      _hover={{ shadow: "xl" }}
      borderRadius="md"
      cursor="pointer"
      align="start"
      pos="relative"
    >
      {course.completed && <CompletedBadge />}
      <Heading>{course.name}</Heading>
      <Spacer />
      <Text>{course.description}</Text>
    </VStack>
  );
};

export default CourseCard;
