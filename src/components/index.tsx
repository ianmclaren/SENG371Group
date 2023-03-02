import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Term } from "../utils/types";
import Header from "./common/Header";
import CourseDashboard from "./organisms/CourseDashboard";
import ProfilePage from "./organisms/ProfilePage";

const DimSpace = () => {
  const [term, setTerm] = useState<Term>("Spring 2023");

  return (
    <Box bgColor="gray.300" minH="100vh">
      <Header term={term} setTerm={setTerm} />
      <Box w="100%" h={1} bgColor="white" />
      <Routes>
        <Route path="/" element={<CourseDashboard term={term} />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Box>
  );
};

export default DimSpace;
