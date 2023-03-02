import { Box, Text, HStack, Flex} from "@chakra-ui/react";

const CoursePage = () => {
    return (
      <Box>
        <HStack>
            <Flex
              gap={10}
              p={1}
              wrap="wrap"
              align="stretch"
              mx="auto"
              maxW={["100%", "90%", "70%"]}
            >
              <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}>
                <Text fontWeight="medium">Home</Text>
              </Box>
              <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}>
                <Text fontWeight="medium">Contents</Text>
              </Box>
              <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}>
                <Text fontWeight="medium">Assignments</Text>
              </Box>
              <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}>
                <Text fontWeight="medium">Quizzes</Text>
              </Box>
              <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}>
                <Text fontWeight="medium">Discussions</Text>
              </Box>
              <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}>
                <Text fontWeight="medium">Groups</Text>
              </Box>
              <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}>
                <Text fontWeight="medium">Grades</Text>
              </Box>
            </Flex>
        </HStack>
        <Box w="100%" h={0.5} bgColor="white" />
      </Box>
    );
  };
  
  export default CoursePage;
  