import { Box, Heading, HStack, VStack, UnorderedList, ListItem, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import CourseHeader from "../common/CourseHeader";
import WeeksColumn from "../common/WeeksColumn";

const CourseAssignments = () => {
    const [queryParameters] = useSearchParams();
    var id = queryParameters.get("courseID");
    const courseID = id == null ? '' : id; // edit if you know a more graceful way to handle the null
    var week = queryParameters.get("week");
    const weekID = week == null ? '' : id;

    return (
        <Box>
            <CourseHeader courseID={courseID} />
            <Box w="100%" h={0.5} bgColor="white" />
            <HStack>
                <WeeksColumn courseID={courseID} />
                <VStack>
                    <Heading fontWeight="light" size="lg">
                        Assignments due this week
                    </Heading>
                    
                    <TableContainer>
                        <Table variant='simple'>
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
                        <Table variant='simple'>
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
            </HStack>
        </Box>
    );
};

export default CourseAssignments;