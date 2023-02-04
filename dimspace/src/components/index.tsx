import { Box } from "@chakra-ui/react";
import Header from "./common/Header";
import CourseDashboard from "./organisms/CourseDashboard";

const DimSpace = () => {
  return (
    <Box bgColor="gray.300" minH="100vh">
      <Header />
      <CourseDashboard />
    </Box>
  );
};

export default DimSpace;
