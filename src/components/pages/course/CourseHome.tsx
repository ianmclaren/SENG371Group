import { Box, Heading, VStack, HStack, Spacer, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { sampleCourses } from "../../../utils/sampleData";
import CourseTitle from "../../atoms/course/CourseTitle";
import CourseHeader from "../../molecules/course/CourseHeader";

const CourseHome = () => {
  let { courseid } = useParams();
  let course = sampleCourses.find((course) => course.id === courseid);
  
  const navigate = useNavigate();

  const buttonStyle = {
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
        <Box w="100%" p={4}>
          <Heading fontWeight="medium" size="lg">
            Upcoming This Week
          </Heading>
        </Box>
        <HStack gap={10} p={3}>
          <Button
            bgColor="gray.200"
            p={20}
            borderRadius="lg"
            {...buttonStyle}
            fontWeight="bold"
            fontSize="xl"
            onClick={() => {
              navigate({
                pathname: `/course/${courseid}/assignments`,
              });
            }}
          >
            <VStack>
              <Text fontWeight="bold">ASSIGNMENTS</Text>
              <Spacer h={3} />
              <Text fontWeight="normal">Assignment 1</Text>
              <Text fontWeight="light"> - Due March 23</Text>
            </VStack>
          </Button>
          <Button
            bgColor="gray.200"
            p={20}
            borderRadius="lg"
            {...buttonStyle}
            fontWeight="bold"
            fontSize="xl"
            onClick={() => {
              navigate({
                pathname: `/course/${courseid}/Quizzes`,
              });
            }}
            >
            <VStack>
              <Text fontWeight="bold">Quizzes</Text>
              <Spacer h={3} />
              <Text fontWeight="normal">Quiz 3</Text>
              <Text fontWeight="light"> - Due March 25</Text>
            </VStack>
          </Button>
          <Button
            bgColor="gray.200"
            p={20}
            borderRadius="lg"
            {...buttonStyle}
            fontWeight="bold"
            fontSize="xl"
            onClick={() => {
              navigate({
                pathname: `/course/${courseid}/discussions`,
              });
            }}
            >
            <VStack>
              <Text fontWeight="bold">Discussions</Text>
              <Spacer h={3} />
              <Text fontWeight="normal">Discussion 1</Text>
              <Text fontWeight="light"> - Due March 27</Text>
            </VStack>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CourseHome;
