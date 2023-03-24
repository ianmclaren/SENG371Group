import { HStack, Heading, Box, VStack } from "@chakra-ui/react";
import { Course } from "../../../utils/types";

const CourseTitle = ({ course }: { course: Course }) => {
  return (
    <HStack p={4} align="stretch">
      <Box w={2} bgColor={course?.color} />
      <VStack align="start">
        <HStack align="baseline">
          <Heading fontWeight="semibold" size="2xl">
            {course?.name}
          </Heading>
          <Heading fontWeight="light" size="xl">
            {course?.description}
          </Heading>
        </HStack>
        <Heading fontWeight="light" size="lg">
          Taught by {course?.professor}
        </Heading>
      </VStack>
    </HStack>
  );
};

export default CourseTitle;
