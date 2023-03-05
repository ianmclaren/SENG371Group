import { Box, VStack, Heading, Flex } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import CourseHeader from "../../common/CourseHeader";
import WeeksColumn from "../../common/WeeksColumn";
import DiscussionCard from "../../molecules/DiscussionCard";
import DiscussionsHeader from "../../molecules/DiscussionHeader";
import { sampleDiscussions } from "../../../utils/sampleData";

const CourseDiscussions = () => {
  const [queryParameters] = useSearchParams();
  const id = queryParameters.get("courseID") || "";
  const courseID = id == null ? '': id; // edit if you know a more graceful way to handle the null
  const discussions = sampleDiscussions.filter(
    (discussion) => discussion.courseID === courseID
  );

  return (
    <Box>
      <CourseHeader courseID={courseID} />
      <Box w="100%" h={0.5} bgColor="white" />
      <Flex justifyContent="space-between">
        <WeeksColumn courseID={courseID} />
        <VStack w="80%" marginTop={12}>
          <DiscussionsHeader />
          {discussions.length > 0 ? (
            discussions.map((discussion) => (
              <DiscussionCard discussion={discussion} />
            ))
          ) : (
            <Heading fontWeight="medium" fontSize="medium">
              There are no active discussion topics
            </Heading>
          )}
        </VStack>
        <Box w="20%" />
      </Flex>
    </Box>
  );
};

export default CourseDiscussions;