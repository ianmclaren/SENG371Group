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
import WeeksColumn from "../../common/WeeksColumn";
import { useNavigate } from "react-router-dom";

const CreateDiscussion = () => {
  let { courseid } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted");
    navigate(`/course/${courseid}/discussions`);
  };

  return (
    <Box>
      <CourseHeader courseID={courseid ?? ""} />
      <Box w="100%" h={0.5} bgColor="white" />
      <Flex justifyContent="space-between">
        <WeeksColumn courseID={courseid ?? ""} />
        <Flex w="100%" justifyContent="center" mt={6}>
          <VStack w="80%" maxW="1000px" mt={6}>
            <Text fontWeight="medium" fontSize="x-large">
              Create a Discussion
            </Text>
            <HStack w="100%">
              <Input
                bg="white"
                placeholder="Discussion Topic"
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

export default CreateDiscussion;
