import { Box, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import CreateDiscussionButton from "../atoms/CreateDiscussionButton";

const DiscussionHeader = () => {
  return (
    <VStack w="100%" >
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
    </VStack>
  );
};

export default DiscussionHeader;
