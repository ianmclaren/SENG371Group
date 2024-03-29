import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Reply } from "../../../utils/types";

const ReplyCard = ({ reply }: { reply: Reply }) => {
  return (
    <Box
      w="100%"
      borderRadius="md"
      p="4"
      ml="auto"
      bgColor="gray.200"
      _dark={{
        bgColor: "gray.600",
        color: "white",
      }}
      color="gray.700"
    >
      <VStack w="100%">
        <HStack w="100%">
          <Text fontWeight="medium" fontSize="large">
            {reply.content}
          </Text>
        </HStack>
        <HStack w="100%">
          <Text fontWeight="sm" fontSize="medium">
            {reply.author} replied on {reply.date}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ReplyCard;
