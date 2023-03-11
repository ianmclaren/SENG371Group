import { Box, VStack, Flex, Text, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";
import WeeksColumn from "../../common/WeeksColumn";

const SingleDiscussion = () => {
  let { courseid } = useParams();

  return (
    <Box>
      <CourseHeader courseID={courseid ?? ""} />
      <Box w="100%" h={0.5} bgColor="white" />
      <Flex justifyContent="space-between">
        <WeeksColumn courseID={courseid ?? ""} />
        <Flex w="100%" justifyContent="center" mt={6}>
          <VStack w="80%" maxW="1000px" mt={6}>
            <Text fontWeight="medium" fontSize="x-large">
              Discussion
            </Text>
            <HStack w="100%"></HStack>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SingleDiscussion;
