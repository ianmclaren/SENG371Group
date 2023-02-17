import { Box, Heading } from "@chakra-ui/react";

const ProfilePage = () => {
  return (
    <Box p={4}>
      <Heading fontWeight="light">Hello, John!</Heading>
      <Heading fontWeight="light" size="md">
        You are registed in 3 courses this term
      </Heading>
    </Box>
  );
};

export default ProfilePage;
