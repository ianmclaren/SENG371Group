import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { sampleCourses } from "../../../utils/sampleData";
import CourseTitle from "../../atoms/course/CourseTitle";
import CourseHeader from "../../molecules/course/CourseHeader";

const CourseHome = () => {
  let { courseid } = useParams();
  let course = sampleCourses.find((course) => course.id === courseid);

  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
      {course && <CourseTitle course={course} />}
    </Box>
  );
};

export default CourseHome;
