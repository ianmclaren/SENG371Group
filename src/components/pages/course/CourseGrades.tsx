import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";

const CourseGrades = () => {
  let { courseid } = useParams();

  return (
    <Box>
      <CourseHeader courseID={courseid ?? ""} />
      <Box w="100%" h={0.5} bgColor="white" />
    </Box>
  );
};

export default CourseGrades;
