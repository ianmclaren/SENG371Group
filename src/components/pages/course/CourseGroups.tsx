import {
    Box,
    VStack,
    Flex,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";
import GroupTable from "../../molecules/group/GroupTable";

import { sampleGroups } from "../../../utils/sampleData";

const CourseGroups = () => {
    let { courseid } = useParams();
    const groups = sampleGroups.filter(
        (group) => group.courseID === courseid
    );

    return (
        <Box>
            <CourseHeader />
            <Box w="100%" h={0.5} bgColor="white" />
            <Flex w="100%" justifyContent="center" mt={6}>
                <VStack w="80%" maxW="1000px" mt={6}>
                    <GroupTable groups={groups} />
                </VStack>
            </Flex>
        </Box>
    );
};

export default CourseGroups;
