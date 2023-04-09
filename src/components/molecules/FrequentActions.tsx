import { VStack, Flex, Heading, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { sampleFrequentActions } from "../../utils/sampleData";

const FrequentActions = () => {
  const navigate = useNavigate();
  return (
    <VStack p={2} margin={3} border="solid" borderRadius={10} borderWidth={1}>
      <Text
        textAlign="center"
        fontWeight="medium"
        fontSize="xl"
        letterSpacing={3}
        textTransform="uppercase"
      >
        Frequent Actions
      </Text>
      <Flex gap={8} p={2} justify="center">
        {sampleFrequentActions.length > 0 ? (
          sampleFrequentActions.map((frequentAction) => (
            <Box
              bgColor="gray.200"
              _dark={{
                bgColor: "gray.600",
              }}
              py={2}
              px={4}
              borderRadius={20}
              key={frequentAction.topic}
              onClick={() =>
                navigate({
                  pathname: frequentAction.linkTo,
                })
              }
              cursor="pointer"
              _hover={{
                shadow: "xl",
                _dark: {
                  shadow: "dark-lg",
                },
              }}
            >
              <Text fontWeight="bold">{frequentAction.topic}</Text>
              <Text>{frequentAction.courseName}</Text>
              <Text as="i" fontWeight="light">
                Accessed {frequentAction.accessCount} times in the last{" "}
                {frequentAction.timeRange}
              </Text>
            </Box>
          ))
        ) : (
          <Heading fontWeight="medium">No relevant frequent actions</Heading>
        )}
      </Flex>
    </VStack>
  );
};

export default FrequentActions;
