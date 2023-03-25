import {
  Box,
  VStack,
  Flex,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";
import QuizTable from "../../molecules/quiz/QuizTable";

import { sampleQuizzes } from "../../../utils/sampleData";

const CourseQuizzes = () => {
  let { courseid } = useParams();
  const quizzes = sampleQuizzes.filter(
      (quiz) => quiz.courseID === courseid
    );

    return (
        <Box>
            <CourseHeader />
            <Box w="100%" h={0.5} bgColor="white" />
            <Flex w="100%" justifyContent="center" mt={6}>
                <VStack w="80%" maxW="1000px" mt={6}>
                    <QuizTable quizzes={quizzes} />
                </VStack>
            </Flex>
        </Box>
    );
};

export default CourseQuizzes;
