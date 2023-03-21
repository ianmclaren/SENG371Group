import { Box, Heading, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";
import WeeksColumn from "../../common/WeeksColumn";
import CourseTitle from "../../atoms/course/CourseTitle";
import { sampleCourses } from "../../../utils/sampleData";

const CourseContents = () => {
  let { courseid, weekid } = useParams();

  let course = sampleCourses.find((course) => course.id === courseid);

  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
      {course && <CourseTitle course={course} />}
      <HStack>
        <WeeksColumn courseID={courseid ?? ""} />
        <Heading fontWeight="light" size="lg">
          You are looking at week {weekid} for course {courseid}
        </Heading>
      </HStack>
    </Box>
  );
};

export default CourseContents;
