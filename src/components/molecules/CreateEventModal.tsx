import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

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
