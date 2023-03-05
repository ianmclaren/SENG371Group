import { Box, HStack, Text} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import CourseHeader from "../../common/CourseHeader";
import WeeksColumn from "../../common/WeeksColumn";

const SingleDiscussion = () => {
    const [queryParameters] = useSearchParams();
    var id = queryParameters.get("courseID");
    const courseID = id == null ? '': id; // edit if you know a more graceful way to handle the null

    return (
      <Box>
        <CourseHeader courseID={courseID} />
        <Box w="100%" h={0.5} bgColor="white" />
        <HStack>
          <WeeksColumn courseID={courseID}/>
          <Text> Single Discussion Page </Text>
        </HStack>
      </Box>
    );
  };

  export default SingleDiscussion;