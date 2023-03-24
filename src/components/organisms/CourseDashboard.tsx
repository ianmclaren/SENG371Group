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
import { sampleCourses } from "../../utils/sampleData";
import CourseCard from "../molecules/course/CourseCard";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Term } from "../../utils/types";

const CourseDashboard = ({ term }: { term: Term }) => {
  const [displayCompleted, setDisplayCompleted] = useState(true);

  const filteredCourses = sampleCourses
    .filter((course) => course.term === term || term === "All")
    .filter((course) => !course.completed || displayCompleted);

  const textStyle = {
    _dark: {
      bgColor: "gray.300",
      color: "black",
    },
  };

  return (
    <Box p={4}>
      <HStack justify="end">
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
            <Box
              bgColor="gray.200"
              py={2}
              px={4}
              borderRadius={20}
              {...textStyle}
            >
              <Text fontWeight="bold">Assignment 1</Text>
              <Text>CSC 110</Text>
              <Text as="i" fontWeight="light">
                Accessed 8 times in the last 48h
              </Text>
            </Box>
            <Box
              bgColor="gray.200"
              py={2}
              borderRadius={20}
              px={4}
              {...textStyle}
            >
              <Text fontWeight="bold">Discussion 3</Text>
              <Text>BIO 150</Text>
              <Text as="i" fontWeight="light">
                Accessed 9 times in the last week
              </Text>
            </Box>
            <Box
              bgColor="gray.200"
              py={2}
              px={4}
              borderRadius={20}
              {...textStyle}
            >
              <Text fontWeight="bold">Partial Integration</Text>
              <Text>MATH 150</Text>
              <Text as="i" fontWeight="light">
                Accessed 3 times in the last 24h
              </Text>
            </Box>
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
        {filteredCourses.length > 0 ? (
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
