import { Box, Heading, HStack} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import CourseHeader from "../common/CourseHeader";
import WeeksColumn from "../common/WeeksColumn";

const CourseHome = () => {
    const [queryParameters] = useSearchParams();
    var id = queryParameters.get("courseID");
    const courseID = id == null ? '': id; // edit if you know a more graceful way to handle the null
    var week = queryParameters.get("week");
    const weekID = week == null ? '': id;

    return (
      <Box>
        <CourseHeader courseID={courseID} />
        <Box w="100%" h={0.5} bgColor="white" />
        <HStack>
          <WeeksColumn courseID={courseID}/>
          <Heading fontWeight="light" size="lg">
            You are looking at home page for week {weekID}
          </Heading>
        </HStack>
      </Box>
    );
  };

  export default CourseHome;