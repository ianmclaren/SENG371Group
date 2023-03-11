import { Box } from "@chakra-ui/react";
import CourseHeader from "../../molecules/course/CourseHeader";

const CourseGrades = () => {
  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
    </Box>
  );
};

export default CourseGrades;
