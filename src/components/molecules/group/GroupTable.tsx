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
    Button,
} from "@chakra-ui/react";
import { Group } from "../../../utils/types";

const GroupTable = ({ groups }: { groups: Group[] }) => {
    return (
        <Box w="100%" p={4}>
            <Text fontSize="x-large">Groups</Text>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Group</Th>
                        <Th>Members</Th>
                        <Th>Max Members</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {groups.length > 0 ? (
                        groups.map((group) => (
                            <Tr key={group.id}>
                                <Td fontSize="medium">Group {group.id}</Td>
                                <Td fontSize="medium">{group.members}</Td>
                                <Td fontSize="medium">{group.max_members}</Td>
                                {group.members === group.max_members ? (
                                    <Td fontSize="medium">FULL</Td>
                                ) : (
                                        <Td fontSize="medium"><Button colorScheme='teal' variant='solid'>Join</Button></Td>
                                    )}
                                
                            </Tr>
                        ))
                    ) : (
                            <Heading fontWeight="medium" fontSize="medium">
                                There are no Groups for this class.
                            </Heading>
                        )}
                </Tbody>
            </Table>
        </Box>
    );
};

export default GroupTable;