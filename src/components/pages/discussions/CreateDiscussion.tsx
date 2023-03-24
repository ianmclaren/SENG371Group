import {
  Box,
  VStack,
  Flex,
  Text,
  Input,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CourseHeader from "../../molecules/course/CourseHeader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function CreateDiscussion () {
  let { courseid } = useParams();
  const navigate = useNavigate();
  const [topic, setTopic] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createNewDiscussion(courseid, topic);
    navigate(`/course/${courseid}/discussions`);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
      <Flex justifyContent="space-between">
        <Flex w="100%" justifyContent="center" mt={6}>
          <VStack w="80%" maxW="1000px" mt={6}>
            <Text fontWeight="medium" fontSize="x-large">
              Create a Discussion
            </Text>
            <HStack w="100%">
              <Input
                bg="white"
                placeholder="Discussion Topic"
                value={topic}
                onChange={handleTopicChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e);
                  }
                }}
              />
              <Button
                bg="gray.100"
                _hover={{ bgColor: "white" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

function getCurrentDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var dateString = year + "-" + month + "-" + day;
  return dateString;
}

function createNewDiscussion(courseid: string = "1", topic: string) {
  var discussions = JSON.parse(localStorage.getItem("discussions") || '');
  
  var newDiscussion = {
    id: getID(),
    courseID: courseid,
    topic: topic,
    date: getCurrentDate(),
    numberReplies: 0,
    author: "John Smith",
    replies: [],
  };
  discussions.push(newDiscussion);
  localStorage.setItem("discussions", JSON.stringify(discussions));
}

function getID() {
  const date = new Date();
  const id = `id-${date.getTime()}`;
  return id;
}
