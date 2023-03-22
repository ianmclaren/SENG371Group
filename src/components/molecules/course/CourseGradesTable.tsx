import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { sampleCourses } from "../../../utils/sampleData";

const CourseGradesTable = ({ courseid }: { courseid: string }) => {
  const course = sampleCourses.find((course) => course.id === courseid);

  return (
    <Box p={8}>
      <Heading>
        Grades for {course?.name} - {course?.description}
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Grade</Th>
              <Th>Weight</Th>
            </Tr>
          </Thead>
          <Tbody>
            {course?.grades?.map((grade) => (
              <Tr
                key={grade.name}
                bgColor="gray.300"
                _hover={{
                  bgColor: "gray.200",
                }}
              >
                <Td>{grade.name}</Td>
                <Td>{grade.grade && `${grade.grade}%`}</Td>
                <Td>{grade.weight}%</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CourseGradesTable;
