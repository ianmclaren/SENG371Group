import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Term } from "../utils/types";
import Header from "./common/Header";
import CourseDashboard from "./organisms/CourseDashboard";
import ProfilePage from "./organisms/ProfilePage";
import CourseHome from "./organisms/CourseHome";
import CourseContents from "./organisms/CourseContents";
import CourseAssignments from "./organisms/CourseAssignments";
import CourseQuizzes from "./organisms/CourseQuizzes";
import CourseDiscussions from "./pages/Discussions/CourseDiscussions";
import CourseGroups from "./organisms/CourseGroups";
import CourseGrades from "./organisms/CourseGrades";
import CreateDiscussion from "./pages/Discussions/CreateDiscussion";
import SingleDiscussion from "./pages/Discussions/SingleDiscussion";

const DimSpace = () => {
  const [term, setTerm] = useState<Term>("Spring 2023");

  return (
    <Box bgColor="gray.300" minH="100vh">
      <Header term={term} setTerm={setTerm} />
      <Box w="100%" h={0.5} bgColor="white" />
      <Routes>
        <Route path="/" element={<CourseDashboard term={term} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/courses" element={<CourseHome />} />
        <Route path="/courses/contents" element={<CourseContents />}/>
        <Route path="/courses/assignments" element={<CourseAssignments />}/>
        <Route path="/courses/quizzes" element={<CourseQuizzes />}/>
        <Route path="/courses/discussions" element={<CourseDiscussions />}/>
        <Route path="/courses/discussions/create" element={<CreateDiscussion />}/>
        <Route path="/courses/discussions/single" element={<SingleDiscussion />}/>
        <Route path="/courses/groups" element={<CourseGroups />}/>
        <Route path="/courses/grades" element={<CourseGrades />}/>
      </Routes>
    </Box>
  );
};

export default DimSpace;
