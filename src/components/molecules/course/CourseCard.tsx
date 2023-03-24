import { Box, Heading, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { Course } from "../../../utils/types";
import CompletedBadge from "../../atoms/CompletedBadge";
import NotificationAlert from "../../atoms/NotificationAlert";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }: { course: Course }) => {
  const navigate = useNavigate();

  const courseCardStyle = {
    bgColor: course?.color,
    _dark: {
      bgColor: course?.darkColor,
    },
  };
  const textStyle = {
    _dark: {
      bgColor: "gray.300",
      color: "black",
    },
  };

  return (
    <VStack
      border="1px"
      borderColor="gray.400"
      _dark={{
        borderColor: "gray.600",
      }}
      minW="250px"
      maxW="400px"
      flexGrow={1}
      h="200px"
      shadow="md"
      _hover={{ shadow: "xl" }}
      transition="all 0.1s ease-in-out"
      borderRadius="md"
      cursor="pointer"
      align="start"
      pos="relative"
      {...courseCardStyle}
      onClick={() =>
        navigate({
          pathname: `/course/${course.id}`,
        })
      }
    >
      {course.completed && <CompletedBadge />}
      <Spacer />
      <Box
        bgColor="gray.200"
        _dark={{
          bgColor: "gray.600",
        }}
        w="100%"
        p={3}
      >
        <HStack>
          <Heading fontWeight="medium">{course.name}</Heading>
          {course.notifications && (
            <NotificationAlert messages={course.notifications} />
          )}
        </HStack>
        <Text fontSize="lg">{course.professor}</Text>
      </Box>
    </VStack>
  );
};

export default CourseCard;
