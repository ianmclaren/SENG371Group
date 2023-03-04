import { Box, Text, VStack, Flex} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const WeeksColumn = ({courseID}: {courseID: string;}) => {
    const navigate = useNavigate();
    const pathname = window.location.hash.split('?')[0].slice(1,);

    const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const handleWeekClick = (week: number) => {
        navigate({
            pathname: pathname,
            search: `?courseID=${courseID}&week=${week}`,
        });
    };

    return (
        <VStack>
            <Box paddingTop={4} paddingLeft={5}>
                <Text fontWeight="medium">Week</Text>
            </Box>
            <Flex
                gap={2}
                p={3}
                flexDirection="column"
                wrap={"wrap"}
                align="stretch"
                mx="auto"
                maxW={["100%", "90%", "70%"]}
            >
                {weeks.map((week) => (
                    <Box
                        key={week}
                        bgColor="gray.200"
                        p={1}
                        borderRadius={20}
                        paddingInline={4}
                        cursor="pointer"
                        _hover={{ shadow: "xl" }}
                        transition="all 0.1s ease-in-out"
                        onClick={() => handleWeekClick(week)}
                    >
                        <Text fontWeight="medium">{week}</Text>
                    </Box>
                ))}
            </Flex>
        </VStack>
    );
};

export default WeeksColumn;