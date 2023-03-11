import {
  Box,
  Heading,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";

const CourseAssignments = () => {
  let { courseid } = useParams();

  return (
    <Box>
      <CourseHeader courseID={courseid ?? ""} />
      <Box w="100%" h={0.5} bgColor="white" />
      <VStack pt={4}>
        <Heading fontWeight="light" size="lg">
          Assignments due this week
        </Heading>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Assignment</Th>
                <Th>Due Date</Th>
                <Th>Weight</Th>
                <Th>Submitted</Th>
                <Th>Graded</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Assignment 2</Td>
                <Td>Mar 5, 2023</Td>
                <Td isNumeric>10</Td>
                <Td>Yes</Td>
                <Td>No</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Heading fontWeight="light" size="lg">
          All Upcoming Assignments
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Assignment</Th>
                <Th>Due Date</Th>
                <Th>Weight</Th>
                <Th>Submitted</Th>
                <Th>Graded</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Assignment 2</Td>
                <Td>Mar 5, 2023</Td>
                <Td isNumeric>10</Td>
                <Td>Yes</Td>
                <Td>No</Td>
              </Tr>
              <Tr>
                <Td>Assignment 3</Td>
                <Td>Mar 14, 2023</Td>
                <Td isNumeric>10</Td>
                <Td>No</Td>
                <Td>No</Td>
              </Tr>
              <Tr>
                <Td>Mini-Lecture Presentation</Td>
                <Td>Mar 20, 2023</Td>
                <Td isNumeric>5</Td>
                <Td>No</Td>
                <Td>No</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
};

export default CourseAssignments;
