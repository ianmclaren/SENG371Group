import { Box, Heading, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { sampleCourses } from "../../../utils/sampleData";
import CourseHeader from "../../molecules/course/CourseHeader";

const CourseHome = () => {
  let { courseid } = useParams();
  let course = sampleCourses.find((course) => course.id === courseid);

  return (
    <Box>
      <CourseHeader courseID={courseid ?? "No ID"} />
      <Box w="100%" h={0.5} bgColor="white" />
      <HStack p={4}>
        <Heading fontWeight="light" size="lg">
          You are looking at home page for {course?.name}
        </Heading>
      </HStack>
    </Box>
  );
};

export default CourseHome;
