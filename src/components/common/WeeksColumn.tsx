import { Box, Text, VStack, Flex} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// if anyone can loop this. Thanks!

const WeeksColumn = ({courseID}: {courseID: string;}) => {
    const navigate = useNavigate();
    const pathname =window.location.pathname;
    return (
          <VStack>
            <Box paddingTop={4} paddingLeft={5}>
                <Text fontWeight="medium">Week</Text>
            </Box>
              <Flex
                gap={2}
                p={3}
                flexDirection="column"
                wrap={"wrap"}
                align="stretch"
                mx="auto"
                maxW={["100%", "90%", "70%"]}
              >
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=1`,
                  })}>
                  <Text fontWeight="medium">1</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=2`,
                  })}>
                  <Text fontWeight="medium">2</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=3`,
                  })}>
                  <Text fontWeight="medium">3</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=4`,
                  })}>
                  <Text fontWeight="medium">4</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=5`,
                  })}>
                  <Text fontWeight="medium">5</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=6`,
                  })}>
                  <Text fontWeight="medium">6</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=7`,
                  })}>
                  <Text fontWeight="medium">7</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=8`,
                  })}>
                  <Text fontWeight="medium">8</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=9`,
                  })}>
                  <Text fontWeight="medium">9</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=10`,
                  })}>
                  <Text fontWeight="medium">10</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=11`,
                  })}>
                  <Text fontWeight="medium">11</Text>
                </Box>
                <Box bgColor="gray.200" p={1} borderRadius={20} paddingInline={4}
                  cursor="pointer"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.1s ease-in-out"
                  onClick={() => navigate({
                    pathname: pathname,
                    search: `?courseID=${courseID}&week=12`,
                  })}>
                  <Text fontWeight="medium">12</Text>
                </Box>
              </Flex>
          </VStack>
      );
    };

export default WeeksColumn;