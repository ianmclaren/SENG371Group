import {
  Box,
  VStack,
  Flex,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";
import AssignmentTable from "../../molecules/assignment/AssignmentTable";

import { sampleAssignments } from "../../../utils/sampleData";

const CourseAssignments = () => {
  let { courseid } = useParams();
  const assignments = sampleAssignments.filter(
      (assignment) => assignment.courseID === courseid
    );

    return (
        <Box>
            <CourseHeader />
            <Box w="100%" h={0.5} bgColor="white" />
            <Flex w="100%" justifyContent="center" mt={6}>
                <VStack w="80%" maxW="1000px" mt={6}>
                    <AssignmentTable assignments={assignments} />
                </VStack>
            </Flex>
        </Box>
    );
};

export default CourseAssignments;
