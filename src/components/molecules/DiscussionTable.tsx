import { Box, Heading, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Discussion } from "../../utils/types";

const DiscussionTable = ({discussions}: {discussions: Discussion[];}) => {
    const navigate = useNavigate();
    const pathname = window.location.hash.split('?')[0].slice(1,);

    const handleDiscussionClick = (courseID: string, discussionID: string) => {
        navigate(`${pathname}/single?courseID=${courseID}&discussionID=${discussionID}`);
    };

    return (
        <Box w="100%" p={4} >
            <Table variant="simple" size="md" borderRadius="md" backgroundColor="gray.200">
                <Thead>
                    <Tr>
                        <Th fontSize="medium" >Topic</Th>
                        <Th fontSize="medium" >Date</Th>
                        <Th fontSize="medium" >Replies</Th>
                        <Th fontSize="medium" >Author</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {discussions.length > 0 ? (
                    discussions.map((discussion) => (
                        <Tr key={discussion.id}>
                            <Td 
                                _hover={{ color: "blue.800" }} 
                                fontSize="medium" 
                                color="blue.500"
                                cursor="pointer"
                                onClick={() => handleDiscussionClick(discussion.courseID, discussion.id)} >
                                    {discussion.topic}
                            </Td>
                            <Td fontSize="medium" >{discussion.date}</Td>
                            <Td fontSize="medium" >{discussion.numberReplies}</Td>
                            <Td fontSize="medium" >{discussion.author}</Td>
                        </Tr>
                    ))
                ) : (
                    <Heading fontWeight="medium" fontSize="medium">
                    There are no active discussion topics
                    </Heading>
                )}
                </Tbody>
            </Table>
        </Box>
    );
};

export default DiscussionTable;