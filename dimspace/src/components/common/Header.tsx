import { Heading, HStack, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack w="100%" p={4}>
      <VStack align="start">
        <Heading fontWeight="light" size="xl">
          DimSpace
        </Heading>
        <Heading fontWeight="light" size="md">
          Summer 2023
        </Heading>
      </VStack>
    </HStack>
  );
};

export default Header;
