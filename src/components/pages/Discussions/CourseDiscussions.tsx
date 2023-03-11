import { Box, VStack, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";
import DiscussionTable from "../../molecules/discussion/DiscussionTable";
import DiscussionsHeader from "../../molecules/discussion/DiscussionHeader";
import { sampleDiscussions } from "../../../utils/sampleData";

const CourseDiscussions = () => {
  let { courseid } = useParams();
  const discussions = sampleDiscussions.filter(
    (discussion) => discussion.courseID === courseid
  );

  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
      <Flex w="100%" justifyContent="center" mt={6}>
        <VStack w="80%" maxW="1000px" mt={6}>
          <DiscussionsHeader />
          <DiscussionTable discussions={discussions} />
        </VStack>
      </Flex>
    </Box>
  );
};

export default CourseDiscussions;
