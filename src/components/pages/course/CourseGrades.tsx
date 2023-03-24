import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CourseGradesTable from "../../molecules/course/CourseGradesTable";
import CourseHeader from "../../molecules/course/CourseHeader";

const CourseGrades = () => {
  let { courseid } = useParams();

  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
      <CourseGradesTable courseid={courseid ?? ""} />
    </Box>
  );
};

export default CourseGrades;
