import {
    Box,
    Heading,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { Assignment } from "../../../utils/types";

const AssignmentTable = ({ assignments }: { assignments: Assignment[] }) => {
    const navigate = useNavigate();
    const { courseid } = useParams();

    const handleAssignmentClick = (courseID: string, assignmentID: string) => {
        navigate(`/course/${courseid}/assignment/${assignmentID}`);
    };

    return (
        <Box w="100%" p={4}>
            <Text fontSize="x-large">Assignments</Text>
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
                    {assignments.length > 0 ? (
                        assignments.map((assignment) => (
                            <Tr key={assignment.id}>
                                <Td fontSize="medium">{assignment.name}</Td>
                                <Td fontSize="medium">{assignment.due_date}</Td>
                                <Td fontSize="medium">{assignment.weight}</Td>
                                <Td fontSize="medium">{assignment.submitted}</Td>
                                <Td fontSize="medium">{assignment.graded}</Td>
                            </Tr>
                        ))
                    ) : (
                            <Heading fontWeight="medium" fontSize="medium">
                                There are no active Assignments
                            </Heading>
                        )}
                </Tbody>
            </Table>
        </Box>
    );
};

export default AssignmentTable;
