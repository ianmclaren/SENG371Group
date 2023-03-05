import { Box, Text, VStack, Flex, HStack} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Discussion } from "../../utils/types";

const DiscussionCard = ({discussion}: {discussion: Discussion;}) => {
    const navigate = useNavigate();
    const pathname = window.location.hash.split('?')[0].slice(1,);

    const handleDiscussionClick = () => {
        navigate(`${pathname}/single?courseID=${discussion.courseID}&discussionID=${discussion.id}`);
    };

    return (
        <VStack>
            <Flex
                gap={2}
                p={3}
                flexDirection="column"
                wrap={"wrap"}
                align="stretch"
                mx="auto"
                maxW="100%"
            >
                
                <Box
                    bgColor="gray.200"
                    p={2}
                    borderRadius={20}
                    paddingInline={4}
                    cursor="pointer"
                    transition="all 0.1s ease-in-out"
                >
                    <HStack>
                        <HStack>
                            <Box w="40%" p={2} >
                                <Text 
                                    fontWeight="medium" 
                                    color="blue" 
                                    _hover={{ color: "blue.800"}}
                                    onClick={() => handleDiscussionClick()} 
                                    >
                                        {discussion.topic}
                                    </Text>
                            </Box>
                            <Box w="25%" p={3} >
                                <Text fontWeight="medium">{discussion.date}</Text>
                            </Box>
                            <Box w="10%" >
                                <Text fontWeight="medium">{discussion.numberReplies}</Text>
                            </Box>
                            <Box w="25%" >
                                <Text fontWeight="medium">{discussion.author}</Text>
                            </Box>
                        </HStack>
                    </HStack>
                </Box>
            </Flex>
        </VStack>
    );
};

export default DiscussionCard;