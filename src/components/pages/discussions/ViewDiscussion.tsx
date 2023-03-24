import { useState } from "react";
import {
  Box,
  VStack,
  Flex,
  Text,
  Button,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { Discussion, Reply } from "../../../utils/types";
import CourseHeader from "../../molecules/course/CourseHeader";
import DiscussionCard from "../../molecules/discussion/DiscussionCard";
import ReplyCard from "../../molecules/discussion/ReplyCard";

export default function ViewDiscussion() {
  let { courseid, discussionid } = useParams();

  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  var discussions = JSON.parse(
    localStorage.getItem("discussions") || ""
  ).filter((discussion: Discussion) => discussion.courseID === courseid);
  var discussion = discussions.filter(
    (discussion: Discussion) => discussion.id === discussionid
  )[0];
  var replies = discussion.replies;

  const handleReplyClick = () => {
    setIsReplyModalOpen(true);
  };

  const handleModalClose = () => {
    setIsReplyModalOpen(false);
  };

  const handleSubmitReply = () => {
    const newReply: Reply = {
      content: replyContent,
      author: "John Smith",
      date: getCurrentDate(),
    };
    replies.push(newReply);
    discussion.numberReplies = replies.length;
    localStorage.setItem("discussions", JSON.stringify(discussions));
    setIsReplyModalOpen(false);
    setReplyContent("");
  };

  return (
    <Box>
      <CourseHeader />
      <Box w="100%" h={0.5} bgColor="white" />
      <Flex justifyContent="space-between">
        <Flex w="100%" justifyContent="center" mt={6}>
          <VStack w="80%" maxW="1000px" mt={4}>
            <Flex justifyContent="space-between" w="100%">
              <Text mb="7" fontWeight="medium" fontSize="x-large">
                View Discussion
              </Text>
              <Button
                _hover={{ bgColor: "gray.400" }}
                color="black"
                border="1px"
                bgColor={"gray.100"}
                rightIcon={<ChatIcon />}
                mr={2}
                onClick={handleReplyClick}
                _dark={{
                  bgColor: "gray.700",
                  color: "white",
                  _hover: { bgColor: "gray.600" },
                }}
              >
                Reply
              </Button>
            </Flex>
            <DiscussionCard discussion={discussion} />
            <Text
              w="100%"
              textAlign="left"
              fontWeight="medium"
              fontSize="x-large"
            >
              Replies ({discussion.numberReplies})
            </Text>
            {replies.length > 0 ? (
              replies.map((reply: Reply) => <ReplyCard reply={reply} />)
            ) : (
              <Text>No replies yet</Text>
            )}
          </VStack>
          <Modal isOpen={isReplyModalOpen} onClose={handleModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Reply</ModalHeader>
              <ModalCloseButton />
              <form>
                <ModalBody>
                  <Box mb={4}>
                    <Textarea
                      placeholder="Your reply"
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      resize="none"
                    />
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" mr={3} onClick={handleModalClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue" onClick={handleSubmitReply}>
                    Reply
                  </Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </Box>
  );
}

function getCurrentDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var dateString = year + "-" + month + "-" + day;
  return dateString;
}
