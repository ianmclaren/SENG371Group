import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";
import WeeksColumn from "../../common/WeeksColumn";
import CourseTitle from "../../atoms/course/CourseTitle";
import { sampleCourses } from "../../../utils/sampleData";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const CourseContents = () => {
  const { courseid, weekid } = useParams();

  const course = sampleCourses.find((course) => course.id === courseid);

  const content = course?.content?.find(
    (content) => content.week === Number(weekid)
  );

  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
      {course && <CourseTitle course={course} />}
      <HStack align="flex-start">
        <WeeksColumn courseID={courseid ?? ""} />
        <VStack align="start" p={4}>
          <Heading fontWeight="bold" size="lg">
            Week {weekid} - {content?.title}
          </Heading>
          {content?.resources && (
            <Heading size="md">Resources for this week:</Heading>
          )}
          <Flex>
            {content?.resources?.map((resource) => (
              <Link
                fontWeight="normal"
                size="md"
                key={resource.title}
                bgColor="green.400"
                py={2}
                px={4}
                mr={2}
                borderRadius="lg"
                href={resource.link}
                target="_blank"
              >
                {resource.title}
                <ExternalLinkIcon ml={2} />
              </Link>
            ))}
          </Flex>
          {content?.content && <Heading size="md">Content:</Heading>}
          <VStack align="start">
            {content?.content?.map((content, idx) => (
              <Text key={idx}>{content}</Text>
            ))}
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CourseContents;
