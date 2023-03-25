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
import { Quiz } from "../../../utils/types";

const QuizTable = ({ quizzes }: { quizzes: Quiz[] }) => {
    return (
        <Box w="100%" p={4}>
            <Text fontSize="x-large">Quizzes</Text>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Quiz</Th>
                        <Th>Due Date</Th>
                        <Th>Questions</Th>
                        <Th>Synchronous</Th>
                        <Th>Weight</Th>
                        <Th>Submitted</Th>
                        <Th>Grade</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {quizzes.length > 0 ? (
                        quizzes.map((quiz) => (
                            <Tr key={quiz.id}>
                                <Td fontSize="medium">{quiz.quizName}</Td>
                                <Td fontSize="medium">{quiz.due_date}</Td>
                                <Td fontSize="medium">{quiz.questionCount}</Td>
                                <Td fontSize="medium">{quiz.synchronous}</Td>
                                <Td fontSize="medium">{quiz.weight}</Td>
                                <Td fontSize="medium">{quiz.submitted}</Td>
                                <Td fontSize="medium">{quiz.graded}</Td>
                            </Tr>
                        ))
                    ) : (
                            <Heading fontWeight="medium" fontSize="medium">
                                There are no active Quizzes
                            </Heading>
                        )}
                </Tbody>
            </Table>
        </Box>
    );
};

export default QuizTable;
