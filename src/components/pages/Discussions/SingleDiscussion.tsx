import { Box, VStack, Flex, Text, HStack } from "@chakra-ui/react";
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
            <Flex justifyContent="space-between">
                <WeeksColumn courseID={courseID} />
                <Flex w="100%" justifyContent="center" mt={6}>
                    <VStack w="80%" maxW="1000px" mt={6}>
                        <Text fontWeight="medium" fontSize="x-large" >Discussion</Text>
                        <HStack w="100%">
                        </HStack>  
                    </VStack>
                </Flex>
            </Flex>
      </Box>
    );
  };

  export default SingleDiscussion;