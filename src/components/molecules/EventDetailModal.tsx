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
import { sampleCourses } from "../../utils/sampleData";

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

const CalendarTag = ({ courseId }: { courseId: string }) => {
  const course = sampleCourses.find((course) => course.id === courseId);

  return (
    <Text
      fontSize="lg"
      bgColor={course?.color || "gray.100"}
      _dark={{
        bgColor: course?.darkColor || "gray.800",
      }}
      display="inline-block"
      py={1}
      px={2}
      borderRadius="md"
      mb={4}
      mr={2}
    >
      {course?.name || `Calendar with id ${courseId}`}
    </Text>
  );
};

const EventDetailModal = ({
  event,
  onClose,
  onDelete,
  isOpen,
}: {
  event: Partial<EventObject>;
  onClose: () => void;
  onDelete: () => void;
  isOpen: boolean;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{event.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CalendarTag courseId={event.calendarId} />
          {event.isAllday && <AllDayEventTag />}
          <Heading size="md">Start</Heading>
          {event.start && (
            <Text fontSize="lg">
              {event.start.toDate().toLocaleDateString([], {
                year: "numeric",
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
              ,{" "}
              {event.start.toDate().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          )}
          <Heading size="md">End</Heading>
          {event.end && (
            <Text fontSize="lg">
              {event.end.toDate().toLocaleDateString([], {
                year: "numeric",
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
              ,{" "}
              {event.end.toDate().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          )}
        </ModalBody>
        <ModalFooter>
          {!event.isReadOnly && (
            <Button colorScheme="red" mr={3} onClick={onDelete}>
              Delete
            </Button>
          )}
          <Button colorScheme="blue" mr={3} onClick={onClose} variant="solid">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EventDetailModal;
