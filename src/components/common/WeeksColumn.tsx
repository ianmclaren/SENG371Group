import { Center, Heading, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const WeeksColumn = ({ courseID }: { courseID: string }) => {
  const navigate = useNavigate();

  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const handleWeekClick = (week: number) => {
    navigate({
      pathname: `/course/${courseID}/content/${week}`,
    });
  };

  const { weekid } = useParams();

  return (
    <VStack p={3}>
      <Heading size="sm">Week</Heading>
      <VStack spacing={2} align="stretch" w="100%">
        {weeks.map((week) => (
          <Center
            key={week}
            bgColor={weekid === week.toString() ? "gray.400" : "gray.100"}
            color="black"
            _dark={{
              bgColor: weekid === week.toString() ? "gray.400" : "gray.600",
              color: "white",
              _hover: { bgColor: "gray.500" },
            }}
            py={1}
            borderRadius="full"
            cursor="pointer"
            _hover={{ shadow: "xl", bgColor: "gray.400" }}
            onClick={() => handleWeekClick(week)}
          >
            {week}
          </Center>
        ))}
      </VStack>
    </VStack>
  );
};

export default WeeksColumn;
