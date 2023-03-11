import { Box, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { sampleCourses } from "../../utils/sampleData";
import CourseCard from "../molecules/course/CourseCard";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Term } from "../../utils/types";

const CourseDashboard = ({ term }: { term: Term }) => {
  const [displayCompleted, setDisplayCompleted] = useState(true);

  const filteredCourses = sampleCourses
    .filter((course) => course.term === term || term === "All")
    .filter((course) => !course.completed || displayCompleted);

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
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <Heading fontWeight="medium">Uh oh... no courses found</Heading>
        )}
      </Flex>
    </Box>
  );
};

export default CourseDashboard;
