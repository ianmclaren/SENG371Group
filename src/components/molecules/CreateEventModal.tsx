import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Heading,
  Input,
  ButtonGroup,
  VStack,
} from "@chakra-ui/react";
import { SelectDateTimeInfo } from "../../utils/types";
import { EventObject } from "@toast-ui/calendar";
import { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import DatePicker from "react-date-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const CreateEventModal = ({
  selectedRange,
  onClose,
  isOpen,
  onCreate,
}: {
  selectedRange: SelectDateTimeInfo;
  onClose: () => void;
  isOpen: boolean;
  onCreate: (event: EventObject) => void;
}) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState<Date>(selectedRange.start);
  const [endDate, setEndDate] = useState<Date>(selectedRange.end);
  const [isAllday, setIsAllday] = useState(selectedRange.isAllday);

  useEffect(() => {
    setStartDate(selectedRange.start);
    setEndDate(selectedRange.end);
  }, [selectedRange]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Event Title"
            mb={4}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <ButtonGroup isAttached mb={4}>
            <Button
              colorScheme="blue"
              variant={isAllday ? "solid" : "outline"}
              onClick={() => setIsAllday(true)}
            >
              All day
            </Button>
            <Button
              colorScheme="blue"
              variant={!isAllday ? "solid" : "outline"}
              onClick={() => setIsAllday(false)}
            >
              Time-based
            </Button>
          </ButtonGroup>
          <VStack align="start">
            <Heading size="md">Start</Heading>
            {isAllday ? (
              <DatePicker
                value={startDate}
                onChange={(val) => val && setStartDate(val as Date)}
              />
            ) : (
              <DateTimePicker
                value={startDate}
                onChange={(val) => val && setStartDate(val as Date)}
                disableClock={true}
              />
            )}
            <Heading size="md">End</Heading>
            {isAllday ? (
              <DatePicker
                value={endDate}
                onChange={(val) => val && setEndDate(val as Date)}
              />
            ) : (
              <DateTimePicker
                value={endDate}
                onChange={(val) => val && setEndDate(val as Date)}
                disableClock={true}
              />
            )}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            colorScheme="green"
            variant="solid"
            isDisabled={!title.trim()}
            onClick={() => {
              onCreate({
                title: title.trim(),
                start: startDate,
                end: endDate,
              });
              onClose();
            }}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateEventModal;
