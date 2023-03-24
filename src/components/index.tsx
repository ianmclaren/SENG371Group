import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Term } from "../utils/types";
import Header from "./common/header/Header";
import CourseDashboard from "./organisms/CourseDashboard";
import ProfilePage from "./pages/ProfilePage";
import CourseHome from "./pages/course/CourseHome";
import CourseContents from "./pages/course/CourseContents";
import CourseAssignments from "./pages/course/CourseAssignments";
import CourseQuizzes from "./pages/course/CourseQuizzes";
import CourseDiscussions from "./pages/discussions/CourseDiscussions";
import CourseGroups from "./pages/course/CourseGroups";
import CourseGrades from "./pages/course/CourseGrades";
import CreateDiscussion from "./pages/discussions/CreateDiscussion";
import SingleDiscussion from "./pages/discussions/ViewDiscussion";

const DimSpace = () => {
  const [term, setTerm] = useState<Term>("Spring 2023");

  return (
    <Box
      bgColor="gray.300"
      _dark={{
        bgColor: "gray.700",
      }}
      minH="100vh"
    >
      <Header term={term} setTerm={setTerm} />
      <Box w="100%" h={0.5} bgColor="white" />
      <Routes>
        <Route path="/" element={<CourseDashboard term={term} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/course/:courseid">
          <Route index={true} path="" element={<CourseHome />} />
          <Route path="content/:weekid" element={<CourseContents />} />
          <Route path="assignments" element={<CourseAssignments />} />
          <Route path="quizzes" element={<CourseQuizzes />} />
          <Route path="discussions" element={<CourseDiscussions />} />
          <Route path="discussions/create" element={<CreateDiscussion />} />
          <Route
            path="discussion/:discussionid"
            element={<SingleDiscussion />}
          />
          <Route path="groups" element={<CourseGroups />} />
          <Route path="grades" element={<CourseGrades />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default DimSpace;
