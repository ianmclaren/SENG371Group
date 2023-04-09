import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { sampleCourses } from "../../utils/sampleData";
import CourseCard from "../molecules/course/CourseCard";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Term } from "../../utils/types";
import KanbanModal from "../molecules/kanban/KanbanModal";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import FrequentActions from "../molecules/FrequentActions";
import { useSmallScreen } from "../../utils/helper";
import DimspaceCalendar from "../common/DimspaceCalendar";
import { CalendarIcon } from "@chakra-ui/icons";

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

  const isSmallScreen = useSmallScreen();

  const [isCalendarView, setIsCalendarView] = useState(false);

  return (
    <Box p={4}>
      <HStack justify="space-between" w="100%">
        <Button
          onClick={() => setIsCalendarView(!isCalendarView)}
          variant="unstyled"
          _hover={{
            textDecoration: "underline",
          }}
          leftIcon={<CalendarIcon />}
        >
          {isCalendarView ? "Hide calendar" : "Show calendar"}
        </Button>
        <HStack divider={<Text mx={2}>|</Text>}>
          <KanbanModal />
          <Button
            onClick={() => setDisplayCompleted(!displayCompleted)}
            variant="unstyled"
            _hover={{
              textDecoration: "underline",
            }}
            leftIcon={<Icon as={displayCompleted ? BsEye : BsEyeSlash} />}
          >
            {displayCompleted ? "Hide " : "Show "}
            completed courses
          </Button>
        </HStack>
      </HStack>
      <Stack align="start" p={4} direction={isSmallScreen ? "column" : "row"}>
        {isCalendarView && (
          <Box w={isSmallScreen ? "100%" : "50%"}>
            <DimspaceCalendar view="month" courseId={undefined} />
          </Box>
        )}
        <VStack
          w={isSmallScreen || !isCalendarView ? "100%" : "50%"}
          align="stretch"
        >
          <FrequentActions />
          <Flex
            gap={4}
            p={4}
            wrap="wrap"
            justify="center"
            align="stretch"
            mx="auto"
            w="100%"
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
        </VStack>
      </Stack>
    </Box>
  );
};

export default CourseDashboard;
