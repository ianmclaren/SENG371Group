import { Box, Heading, VStack, HStack, Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { sampleCourses } from "../../../utils/sampleData";
import CourseTitle from "../../atoms/course/CourseTitle";
import CourseHeader from "../../molecules/course/CourseHeader";

const CourseHome = () => {
  let { courseid } = useParams();
  let course = sampleCourses.find((course) => course.id === courseid);

  const courseHeaderStyle = {
    bgColor: course?.color,
    _dark: {
      bgColor: course?.darkColor,
    },
  };
  const textStyle = {
    _dark: {
      bgColor: "gray.300",
      color: "black",
    },
  };

  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
      {course && <CourseTitle course={course} />}
      <VStack p={1}>
        <Box w="100%" p={4} {...courseHeaderStyle}>
          <Spacer h={12} />
          <Heading fontWeight="semibold" size="2xl">
            {course?.name}
          </Heading>
          <Heading size="md" fontWeight="normal">
            Taught by {course?.professor}
          </Heading>
        </Box>
        <Box w="100%" p={4}>
          <Heading fontWeight="medium" size="lg">
            Upcoming This Week
          </Heading>
        </Box>
        <HStack gap={10} p={3}>
          <Box bgColor="gray.200" p={8} borderRadius="lg" {...textStyle}>
            <Text fontWeight="bold" fontSize="xl" letterSpacing={1}>
              ASSIGNMENTS
            </Text>
            <Spacer h={3} />
            <Text fontWeight="normal">Assignment 1</Text>
            <Text fontWeight="light"> - Due March 23</Text>
          </Box>
          <Box bgColor="gray.200" p={8} borderRadius="lg" {...textStyle}>
            <Text fontWeight="bold" fontSize="xl" letterSpacing={1}>
              QUIZZES
            </Text>
            <Spacer h={3} />
            <Text fontWeight="normal">Quiz 3</Text>
            <Text fontWeight="light">- Due March 25</Text>
          </Box>
          <Box bgColor="gray.200" p={8} borderRadius="lg" {...textStyle}>
            <Text fontWeight="bold" fontSize="xl" letterSpacing={1}>
              DISCUSSIONS
            </Text>
            <Spacer h={3} />
            <Text fontWeight="normal">Discussion 2</Text>
            <Text fontWeight="light">- Due March 27</Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CourseHome;
