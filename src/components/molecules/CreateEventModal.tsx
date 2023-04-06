import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { EventObject } from "@toast-ui/calendar";

const AllDayEventTag = () => (
  <Text
    fontSize="lg"
    bgColor="gray.100"
    _dark={{
      bgColor: "gray.800",
    }}
    display="inline-block"
    py={1}
    px={2}
    borderRadius="md"
    mb={4}
  >
    All day event
  </Text>
);

const CreateEventModal = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* {event.isAllday && <AllDayEventTag />}
          <Heading size="md">Start</Heading>
          <Text fontSize="lg">
            {event.start?.toDate().toLocaleDateString([], {
              year: "numeric",
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
            ,{" "}
            {event.start?.toDate().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
          <Heading size="md">End</Heading>
          <Text fontSize="lg">
            {event.end?.toDate().toLocaleDateString([], {
              year: "numeric",
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
            ,{" "}
            {event.end?.toDate().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text> */}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateEventModal;
