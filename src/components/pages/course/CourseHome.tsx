import { WarningTwoIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Spacer,
  Text,
  Button,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { sampleCourses } from "../../../utils/sampleData";
import CourseTitle from "../../atoms/course/CourseTitle";
import CourseHeader from "../../molecules/course/CourseHeader";
import DimspaceCalendar from "../../common/DimspaceCalendar";

const CourseHome = () => {
  let { courseid } = useParams();
  let course = sampleCourses.find((course) => course.id === courseid);

  const navigate = useNavigate();

  const buttonStyle = {
    _dark: {
      bgColor: "gray.600",
      color: "white",
    },
    bgColor: "gray.100",
    _hover: {
      bgColor: "white",
      _dark: {
        bgColor: "gray.800",
      },
    },
  };

  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
      {course && <CourseTitle course={course} />}
      {course?.notifications?.map((notification) => (
        <Box
          key={notification}
          display="inline-flex"
          alignItems="center"
          gap={2}
          py={2}
          px={4}
          m={2}
          ml={4}
          bgColor="white"
          _dark={{
            bgColor: "gray.800",
          }}
          borderRadius="lg"
        >
          <WarningTwoIcon
            color="orange.500"
            _dark={{
              color: "orange.300",
            }}
          />
          <Text fontSize="xl" fontWeight="bold">
            {notification}
          </Text>
        </Box>
      ))}

      <VStack>
        <VStack p={1}>
          <Box w="100%" p={4}>
            <Heading fontWeight="medium" size="lg">
              Upcoming This Week
            </Heading>
          </Box>
          <HStack gap={10} p={3}>
            <Button
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
              p={20}
              borderRadius="lg"
              {...buttonStyle}
              fontWeight="bold"
              fontSize="xl"
              onClick={() => {
                navigate({
                  pathname: `/course/${courseid}/quizzes`,
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
        <Box w="50%">
          <DimspaceCalendar view="month" courseId={courseid} />
        </Box>
      </VStack>
    </Box>
  );
};

export default CourseHome;
