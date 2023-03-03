import { Box, Text, HStack, Flex} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CourseHeader = ({courseID}: {courseID: string;}) => {
    const navigate = useNavigate();
    return (
          <HStack>
              <Flex
                gap={10}
                p={1}
                wrap="wrap"
                align="stretch"
                mx="auto"
                maxW={["100%", "90%", "70%"]}
              >
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: '/courses',
                    search: `?courseID=${courseID}&week=1`,
                  })}>
                  <Text fontWeight="medium">Home</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: '/courses/contents',
                    search: `?courseID=${courseID}`,
                  })}>
                  <Text fontWeight="medium">Contents</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: '/courses/assignments',
                    search: `?courseID=${courseID}`,
                  })}>
                  <Text fontWeight="medium">Assignments</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: '/courses/quizzes',
                    search: `?courseID=${courseID}`,
                  })}>
                  <Text fontWeight="medium">Quizzes</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: '/courses/discussions',
                    search: `?courseID=${courseID}`,
                  })}>
                  <Text fontWeight="medium">Discussions</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: '/courses/groups',
                    search: `?courseID=${courseID}`,
                  })}>
                  <Text fontWeight="medium">Groups</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: '/courses/grades',
                    search: `?courseID=${courseID}`,
                  })}>
                  <Text fontWeight="medium">Grades</Text>
                </Box>
              </Flex>
          </HStack>
      );
    };

export default CourseHeader;