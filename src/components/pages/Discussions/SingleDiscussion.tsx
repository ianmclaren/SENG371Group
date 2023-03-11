import { Box, VStack, Flex, Text, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";

const SingleDiscussion = () => {
  let { courseid, discussionid } = useParams();

  return (
    <Box>
      <CourseHeader courseID={courseid ?? ""} />
      <Box w="100%" h={0.5} bgColor="white" />
      <Flex justifyContent="space-between">
        <Flex w="100%" justifyContent="center" mt={6}>
          <VStack w="80%" maxW="1000px" mt={6}>
            <Text fontWeight="medium" fontSize="x-large">
              Discussion
            </Text>
            <HStack w="100%">
              <Text fontWeight="medium" fontSize="large">
                You are looking at discussion {discussionid} for course{" "}
                {courseid}
              </Text>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SingleDiscussion;
