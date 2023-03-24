import {
  Box,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { Discussion } from "../../../utils/types";

const DiscussionTable = ({ discussions }: { discussions: Discussion[] }) => {
  const navigate = useNavigate();
  const { courseid } = useParams();

  const handleDiscussionClick = (courseID: string, discussionID: string) => {
    navigate(`/course/${courseid}/discussion/${discussionID}`);
  };

  return (
    <Box w="100%" p={4}>
      <Table
        variant="simple"
        size="md"
        borderRadius="md"
        backgroundColor="gray.200"
      >
        <Thead>
          <Tr>
            <Th fontSize="medium" _dark={{color: "black"}}>Topic</Th>
            <Th fontSize="medium" _dark={{color: "black"}}>Date</Th>
            <Th fontSize="medium" _dark={{color: "black"}}>Replies</Th>
            <Th fontSize="medium" _dark={{color: "black"}}>Author</Th>
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
                  onClick={() =>
                    handleDiscussionClick(discussion.courseID, discussion.id)
                  }
                >
                  {discussion.topic}
                </Td>
                <Td fontSize="medium" _dark={{color: "gray.700"}}>{discussion.date}</Td>
                <Td fontSize="medium" _dark={{color: "gray.700"}}>{discussion.numberReplies}</Td>
                <Td fontSize="medium" _dark={{color: "gray.700"}}>{discussion.author}</Td>
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
