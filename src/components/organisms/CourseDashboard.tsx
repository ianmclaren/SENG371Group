import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { sampleCourses, sampleFrequentActions } from "../../utils/sampleData";
import CourseCard from "../molecules/course/CourseCard";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Term } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import KanbanModal from "../molecules/kanban/KanbanModal";


const CourseDashboard = ({
  term,
  searchPrompt,
}: {
  term: Term;
  searchPrompt: string;
}) => {
  const [displayCompleted, setDisplayCompleted] = useState(true);

  const filteredCourses = sampleCourses
    .filter((course) => course.term === term || term === "All")
    .filter((course) => !course.completed || displayCompleted);

  const filteredSearch = filteredCourses.filter((course) =>
    course.name.toLowerCase().includes(searchPrompt.toLowerCase())
  );

  const navigate = useNavigate();

  return (
    <Box p={4}>
      <HStack justify="end">
        <KanbanModal/>
        <HStack
          onClick={() => setDisplayCompleted(!displayCompleted)}
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
        >
          
          <Icon as={displayCompleted ? BsEye : BsEyeSlash} fontSize="xl" />
          <Text fontSize="xl">
            {displayCompleted ? "Hide " : "Show "}
            completed courses
          </Text>
        </HStack>
      </HStack>
      <Center>
        <VStack
          p={2}
          margin={3}
          border="solid"
          borderRadius={10}
          borderWidth={1}
        >
          <Text
            textAlign="center"
            fontWeight="medium"
            fontSize="xl"
            letterSpacing={3}
            textTransform="uppercase"
          >
            Frequent Actions
          </Text>
          <Flex gap={8} p={2} justify="center">
            {sampleFrequentActions.length > 0 ? (
              sampleFrequentActions.map((frequentAction) => (
                <Box
                  bgColor="gray.200"
                  _dark={{
                    bgColor: "gray.600",
                  }}
                  py={2}
                  px={4}
                  borderRadius={20}
                  key={frequentAction.topic}
                  onClick={() =>
                    navigate({
                      pathname: frequentAction.linkTo,
                    })
                  }
                  cursor="pointer"
                  _hover={{
                    shadow: "xl",
                    _dark: {
                      shadow: "dark-lg",
                    },
                  }}
                >
                  <Text fontWeight="bold">{frequentAction.topic}</Text>
                  <Text>{frequentAction.courseName}</Text>
                  <Text as="i" fontWeight="light">
                    Accessed {frequentAction.accessCount} times in the last{" "}
                    {frequentAction.timeRange}
                  </Text>
                </Box>
              ))
            ) : (
              <Heading fontWeight="medium">
                No relevant frequent actions
              </Heading>
            )}
          </Flex>
        </VStack>
      </Center>
      <Flex
        gap={4}
        p={4}
        wrap="wrap"
        justify="center"
        align="stretch"
        mx="auto"
        maxW={["100%", "90%", "70%"]}
      >
        {searchPrompt ? (
          filteredSearch.length > 0 ? (
            filteredSearch.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <Heading fontWeight="medium">Uh oh... no courses found</Heading>
          )
        ) : filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <Heading fontWeight="medium">Uh oh... no courses found</Heading>
        )}
      </Flex>
    </Box>
  );
};

export default CourseDashboard;
