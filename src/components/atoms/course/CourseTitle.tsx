import { HStack, Heading, Box } from "@chakra-ui/react";
import { Course } from "../../../utils/types";

const CourseTitle = ({ course }: { course: Course }) => {
  return (
    <HStack p={4} align="stretch">
      <Box w={2} bgColor={course?.color} />
      <HStack align="baseline">
        <Heading>{course?.name}</Heading>
        <Heading fontWeight="light" size="md">
          {course?.description}
        </Heading>
      </HStack>
    </HStack>
  );
};

export default CourseTitle;
