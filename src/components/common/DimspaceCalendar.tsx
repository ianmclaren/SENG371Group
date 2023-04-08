import { ExternalEventTypes, Options, EventObject } from "@toast-ui/calendar";
import type { ChangeEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Calendar from "@toast-ui/react-calendar";
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Select,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  convertIntoReadableMonth,
  convertIntoReadableRange,
  useSmallScreen,
} from "../../utils/helper";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import { SelectDateTimeInfo, ViewType } from "../../utils/types";
import EventDetailModal from "../molecules/EventDetailModal";
import CreateEventModal from "../molecules/CreateEventModal";
import { sampleCourses } from "../../utils/sampleData";
import { courseEvents } from "../../utils/sampleData/calendar";

const viewModeOptions = [
  {
    title: "Monthly",
    value: "month",
  },
  {
    title: "Weekly",
    value: "week",
  },
];

const DimspaceCalendar = ({
  view,
  courseId,
}: {
  view: ViewType;
  courseId: string | undefined;
}) => {
  const calendarRef = useRef<typeof Calendar>(null);
  const [selectedDateRangeText, setSelectedDateRangeText] = useState("");
  const [selectedView, setSelectedView] = useState(view);

  const [selectedEvent, setSelectedEvent] = useState<Partial<EventObject>>({});
  const [selectedRange, setSelectedRange] = useState<
    SelectDateTimeInfo | undefined
  >(undefined);

  const [allEvents, setAllEvents] = useState<EventObject[]>(courseEvents);

  useEffect(() => {
    if (courseId) {
      setAllEvents(
        courseEvents.filter((event) => event.calendarId === courseId)
      );
    } else {
      setAllEvents(courseEvents);
    }
  }, [courseId]);

  useEffect(() => {
    console.log("Checking localstorage...");
    if (localStorage.getItem("calendar-events") !== null) {
      console.log("Found localstorage!");
      setAllEvents(JSON.parse(localStorage.getItem("calendar-events") || ""));
    } else {
      console.log("No localstorage found.");
      localStorage.setItem("calendar-events", JSON.stringify(courseEvents));
    }
  }, []);

  const initialCalendars: Options["calendars"] = sampleCourses.map(
    (course) => ({
      id: course.id,
      name: course.name,
      backgroundColor: course.color,
      borderColor: course.color,
      dragBackgroundColor: course.darkColor,
    })
  );

  const getCalInstance = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    () => calendarRef.current?.getInstance?.(),
    []
  );

  const updateRenderRangeText = useCallback(() => {
    const calInstance = getCalInstance();
    if (!calInstance) {
      setSelectedDateRangeText("");
    }

    const viewName = calInstance.getViewName();
    const calDate = calInstance.getDate();
    const rangeStart = calInstance.getDateRangeStart();
    const rangeEnd = calInstance.getDateRangeEnd();

    let year = calDate.getFullYear();
    let month = calDate.getMonth() + 1;
    let date = calDate.getDate();
    let dateRangeText: string;

    switch (viewName) {
      case "month": {
        dateRangeText = `${year}-${month}`;
        break;
      }
      case "week": {
        year = rangeStart.getFullYear();
        month = rangeStart.getMonth() + 1;
        date = rangeStart.getDate();
        const endMonth = rangeEnd.getMonth() + 1;
        const endDate = rangeEnd.getDate();

        const start = `${year}-${month < 10 ? "0" : ""}${month}-${
          date < 10 ? "0" : ""
        }${date}`;
        const end = `${year}-${endMonth < 10 ? "0" : ""}${endMonth}-${
          endDate < 10 ? "0" : ""
        }${endDate}`;
        dateRangeText = `${start} ~ ${end}`;
        break;
      }
      default:
        dateRangeText = `${year}-${month}-${date}`;
    }

    setSelectedDateRangeText(dateRangeText);
  }, [getCalInstance]);

  useEffect(() => {
    setSelectedView(view);
  }, [view]);

  useEffect(() => {
    updateRenderRangeText();
  }, [selectedView, updateRenderRangeText]);

  const onBeforeDeleteEvent: ExternalEventTypes["beforeDeleteEvent"] = (
    res
  ) => {
    console.log(res);
    const { id, calendarId } = res;
    getCalInstance().deleteEvent(id, calendarId);
  };

  const onClickEvent: ExternalEventTypes["clickEvent"] = (res) => {
    console.group("onClickEvent");
    console.log("MouseEvent : ", res.nativeEvent);
    console.log("Event Info : ", res.event);
    console.groupEnd();
    setSelectedEvent(res.event);
    onEventDetailOpen();
  };

  const onChangeSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    setSelectedView(ev.target.value as ViewType);
  };

  const onClickNav = (option: "prev" | "next" | "today") => {
    getCalInstance()[option]();
    updateRenderRangeText();
  };

  const onBeforeUpdateEvent: ExternalEventTypes["beforeUpdateEvent"] = (
    updateData
  ) => {
    const targetEvent = updateData.event;
    const changes = { ...updateData.changes };

    getCalInstance().updateEvent(
      targetEvent.id,
      targetEvent.calendarId,
      changes
    );
  };

  const onBeforeCreateEvent: ExternalEventTypes["beforeCreateEvent"] = (
    eventData
  ) => {
    console.log(eventData);
    const event = {
      calendarId: eventData.calendarId || "",
      id: String(Math.random()),
      title: eventData.title,
      isAllday: eventData.isAllday,
      start: eventData.start,
      end: eventData.end,
      category: eventData.isAllday ? "allday" : "time",
      dueDateClass: "",
      location: eventData.location,
      state: eventData.state,
      isPrivate: eventData.isPrivate,
    };

    getCalInstance().createEvents([event]);
  };

  const onSelectDateTime: ExternalEventTypes["selectDateTime"] = (res) => {
    console.group("onSelectDateTime");
    console.log("Info : ", res);
    console.groupEnd();
    setSelectedRange(res);
    onEventCreateOpen();
    getCalInstance().guide?.clearGuideElement();
  };

  const onBeforeCreateSchedule: ExternalEventTypes["beforeCreateSchedule"] = (
    scheduleData
  ) => {
    console.log("beforeCreateScheduler", scheduleData);
    scheduleData.guide.clearGuideElement();
  };

  const onCreateEvent = (event: Partial<EventObject>) => {
    console.log("onCreateEvent", event);
    const inst = getCalInstance();
    console.log("inst", inst);
    inst.createEvents([event]);
    inst.clearGridSelections();

    var events = JSON.parse(localStorage.getItem("calendar-events") || "");
    events.push(event);
    localStorage.setItem("calendar-events", JSON.stringify(events));
  };

  const isSmallScreen = useSmallScreen();

  const {
    isOpen: isEventDetailOpen,
    onOpen: onEventDetailOpen,
    onClose: onEventDetailClose,
  } = useDisclosure();

  const {
    isOpen: isEventCreateOpen,
    onOpen: onEventCreateOpen,
    onClose: onEventCreateCloseTemp,
  } = useDisclosure();

  const onEventCreateClose = () => {
    getCalInstance().clearGridSelections();
    onEventCreateCloseTemp();
  };

  const onDeleteSelectedEvent = () => {
    console.log("onDeleteSelectedEvent", selectedEvent);
    getCalInstance().deleteEvent(selectedEvent.id, selectedEvent.calendarId);

    const eventsStored = JSON.parse(
      localStorage.getItem("calendar-events") || ""
    );
    const events = eventsStored.filter(
      (e: Partial<EventObject>) =>
        e.id !== selectedEvent.id && e.calendarId !== selectedEvent.calendarId
    );
    localStorage.setItem("calendar-events", JSON.stringify(events));

    onEventDetailClose();
  };

  return (
    <Box>
      <Stack py={2} direction={isSmallScreen ? "column" : "row"} align="center">
        <Select
          w={isSmallScreen ? "100%" : "30%"}
          variant="filled"
          onChange={onChangeSelect}
          value={selectedView}
        >
          {viewModeOptions.map((option, index) => (
            <option value={option.value} key={index}>
              {option.title}
            </option>
          ))}
        </Select>
        <HStack w="100%">
          <ButtonGroup variant="solid" isAttached gap={1}>
            <Button onClick={() => onClickNav("today")}>Today</Button>
            <Button onClick={() => onClickNav("prev")}>Prev</Button>
            <Button onClick={() => onClickNav("next")}>Next</Button>
          </ButtonGroup>
          <Spacer />
          <Box>
            <Text display="inline-block" fontWeight="semibold" fontSize="xl">
              {selectedDateRangeText && selectedView === "month"
                ? convertIntoReadableMonth(selectedDateRangeText)
                : convertIntoReadableRange(selectedDateRangeText)}
            </Text>
          </Box>
        </HStack>
      </Stack>
      <Calendar
        height="900px"
        calendars={initialCalendars}
        month={{ startDayOfWeek: 1 }}
        events={
          courseId
            ? allEvents.filter((event) => event.calendarId === courseId)
            : allEvents
        }
        template={{
          milestone(event) {
            return `<span style="color: #fff; background-color: ${event.backgroundColor};">${event.title}</span>`;
          },
          allday(event) {
            return `[All day] ${event.title}`;
          },
        }}
        view={selectedView}
        week={{
          showTimezoneCollapseButton: true,
          timezonesCollapsed: false,
          eventView: true,
          taskView: true,
        }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={calendarRef}
        onBeforeDeleteEvent={onBeforeDeleteEvent}
        onBeforeUpdateEvent={onBeforeUpdateEvent}
        onBeforeCreateEvent={onBeforeCreateEvent}
        onClickEvent={onClickEvent}
        onBeforeCreateSchedule={onBeforeCreateSchedule}
        onSelectDateTime={onSelectDateTime}
      />
      <EventDetailModal
        isOpen={isEventDetailOpen}
        onClose={onEventDetailClose}
        event={selectedEvent}
        onDelete={onDeleteSelectedEvent}
      />
      {selectedRange && (
        <CreateEventModal
          onCreate={onCreateEvent}
          selectedRange={selectedRange}
          isOpen={isEventCreateOpen}
          onClose={onEventCreateClose}
        />
      )}
    </Box>
  );
};

export default DimspaceCalendar;
