import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import CourseDashboard from "./organisms/CourseDashboard";
import ProfilePage from "./organisms/ProfilePage";

const DimSpace = () => {
  return (
    <Box bgColor="gray.300" minH="100vh">
      <Header />
      <Box w="100%" h={1} bgColor="white" />
      <Routes>
        <Route path="/" element={<CourseDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Box>
  );
};

export default DimSpace;
