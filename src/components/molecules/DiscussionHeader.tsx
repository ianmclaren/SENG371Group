import { Box, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import CreateDiscussionButton from "../atoms/CreateDiscussionButton";

const DiscussionHeader = () => {
  return (
    <VStack w="100%">
      <HStack w="100%">
        <Box paddingLeft={5}>
          <Text fontWeight="medium" fontSize="x-large">
            Discussions
          </Text>
        </Box>
        <Spacer />
        <Box paddingRight={5}>
          <CreateDiscussionButton />
        </Box>
      </HStack>

      <HStack w="100%">
        <VStack>
          <Box paddingTop={4} paddingLeft={5}>
            <Text fontWeight="medium">Topic</Text>
          </Box>
        </VStack>
        <VStack>
          <Box paddingTop={4} paddingLeft={5}>
            <Text fontWeight="medium">Date</Text>
          </Box>
        </VStack>
        <VStack>
          <Box paddingTop={4} paddingLeft={5}>
            <Text fontWeight="medium">Replies</Text>
          </Box>
        </VStack>
        <VStack>
          <Box paddingTop={4} paddingLeft={5}>
            <Text fontWeight="medium">Author</Text>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default DiscussionHeader;
