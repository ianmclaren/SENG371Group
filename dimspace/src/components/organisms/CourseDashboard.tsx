import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { sampleCourses } from "../../utils/sampleData";
import CourseCard from "../molecules/CourseCard";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const CourseDashboard = () => {
  const [displayCompleted, setDisplayCompleted] = useState(true);
  return (
    <Box>
      <HStack
        px={4}
        onClick={() => setDisplayCompleted(!displayCompleted)}
        cursor="pointer"
        _hover={{
          textDecoration: "underline",
        }}
      >
        <Icon as={displayCompleted ? BsEye : BsEyeSlash} fontSize="xl" />
        <Text fontSize="xl">
          {displayCompleted ? "Hide " : "Show "}
          completed courses
        </Text>
      </HStack>
      <Flex gap={4} p={8} wrap="wrap" justify="center" align="stretch">
        {sampleCourses.map((course) => {
          return course.completed ? (
            displayCompleted && <CourseCard course={course} />
          ) : (
            <CourseCard course={course} />
          );
        })}
      </Flex>
    </Box>
  );
};

export default CourseDashboard;
