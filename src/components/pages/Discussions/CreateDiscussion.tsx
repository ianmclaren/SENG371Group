import { Box, VStack, Flex, Text, Input, HStack, Button } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import CourseHeader from "../../common/CourseHeader";
import WeeksColumn from "../../common/WeeksColumn";
import { useNavigate } from "react-router-dom";

const CreateDiscussion = () => {
    const [queryParameters] = useSearchParams();
    var id = queryParameters.get("courseID");
    const courseID = id == null ? '': id; // edit if you know a more graceful way to handle the null
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted");
        navigate(`/courses/discussions?courseID=${courseID}&week=1`);
    }

    return (
        <Box>
            <CourseHeader courseID={courseID} />
            <Box w="100%" h={0.5} bgColor="white" />
            <Flex justifyContent="space-between">
                <WeeksColumn courseID={courseID} />
                <Flex w="100%" justifyContent="center" mt={6}>
                    <VStack w="80%" maxW="1000px" mt={6}>
                        <Text fontWeight="medium" fontSize="x-large" >Create a Discussion</Text>
                        <HStack w="100%">
                            <Input 
                                bg="white" 
                                placeholder="Discussion Topic" 
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmit(e);
                                    }
                                }}/>
                            <Button 
                                bg="gray.100" 
                                _hover={{ bgColor: "white" }}
                                onClick={handleSubmit}>
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