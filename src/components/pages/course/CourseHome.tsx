import { Box, Heading, VStack, HStack, Spacer, Text} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { sampleCourses } from "../../../utils/sampleData";
import CourseHeader from "../../molecules/course/CourseHeader";

const CourseHome = () => {
  let { courseid } = useParams();
  let course = sampleCourses.find((course) => course.id === courseid);

const courseHeaderStyle = {
  bgColor: course?.color,
  _dark: {
    bgColor: course?.darkColor,
  },
}
const textStyle = {
  _dark: {
    bgColor: "gray.300",
    color: "black"
  },
};

  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
      <VStack p={1}>
        <Box w="100%" paddingLeft={5} paddingBottom={2} {...courseHeaderStyle}>
          <Spacer h={12}/>
          <Heading fontWeight="semibold" size="xl">
            {course?.name}
          </Heading>
          <h3>Taught by {course?.professor}</h3>
        </Box>
        <Box w="100%" p={5}>
          <Heading fontWeight="medium" size="lg">
            Upcoming This Week
          </Heading>
        </Box>
          <HStack
              gap={10}
              p={3}
            >
            <Box bgColor="gray.200" p={10} borderRadius={20} paddingInline={20}
              {...textStyle}>
              <Text fontWeight="medium" fontSize="xl" letterSpacing={3} textTransform="uppercase">Assignments</Text>
              <Spacer h={3}/>
              <Text fontWeight="normal">Assignment 1</Text>
              <Text fontWeight="light" fontSize="sm">Due March 23</Text>
            </Box>
            <Box bgColor="gray.200" p={10} borderRadius={20} paddingInline={20}
              {...textStyle}>
              <Text fontWeight="medium" fontSize="xl" letterSpacing={3} textTransform="uppercase">Quizzes</Text>
              <Spacer h={3}/>
              <Text fontWeight="normal">Quizz 3</Text>
              <Text fontWeight="light" fontSize="sm">Due March 25</Text>
            </Box>
            <Box bgColor="gray.200" p={10} borderRadius={20} paddingInline={20}
              {...textStyle}>
              <Text fontWeight="medium" fontSize="xl" letterSpacing={3} textTransform="uppercase">Discussions</Text>
              <Spacer h={3}/>
              <Text fontWeight="normal">Discussion 2</Text>
              <Text fontWeight="light" fontSize="sm">Due March 27</Text>
            </Box>
          </HStack>
      </VStack>
    </Box>
  );
};

export default CourseHome;
