import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { sampleCourses } from "../../utils/sampleData";
import CourseCard from "../molecules/CourseCard";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Term } from "../../utils/types";

const CourseDashboard = ({ term }: { term: Term }) => {
  const [displayCompleted, setDisplayCompleted] = useState(true);
  return (
    <Box p={4}>
      <HStack justify="end">
        <HStack
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
      </HStack>
      <Flex
        gap={4}
        p={4}
        wrap="wrap"
        justify="center"
        align="stretch"
        mx="auto"
        maxW={["100%", "90%", "70%"]}
      >
        {sampleCourses.map((course) => {
          return course.completed
            ? displayCompleted && (course.term === term || term === "All") && (
                <CourseCard course={course} />
              )
            : (course.term === term || term === "All") && (
                <CourseCard course={course} />
              );
        })}
      </Flex>
    </Box>
  );
};

export default CourseDashboard;
