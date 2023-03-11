import { Box, Heading, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";
import WeeksColumn from "../../common/WeeksColumn";

const CourseContents = () => {
  let { courseid, weekid } = useParams();

  return (
    <Box>
      <CourseHeader courseID={courseid ?? ""} weekID={weekid ?? ""} />
      <Box w="100%" h={0.5} bgColor="white" />
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
