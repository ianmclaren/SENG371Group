import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { Discussion } from "../../../utils/types";

const DiscussionCard = ({ discussion }: { discussion: Discussion }) => {
  return (
    <Box w="100%" borderRadius="md" p="4" bgColor="gray.200">
      <VStack w="100%">
          <Text w="100%" fontWeight="medium" fontSize="large">
            {discussion.topic}
          </Text>
        <HStack w="100%">
          <Text fontWeight="sm" fontSize="medium" color="gray.500">
            {discussion.author} - {discussion.date}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default DiscussionCard;
