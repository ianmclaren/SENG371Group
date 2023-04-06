import {
  ExternalEventTypes,
  Options,
  EventObject,
  TZDate,
} from "@toast-ui/calendar";
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
  useToken,
} from "@chakra-ui/react";
import {
  addDate,
  addHours,
  convertIntoReadableMonth,
  convertIntoReadableRange,
  subtractDate,
  useSmallScreen,
} from "../../utils/helper";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import { SelectDateTimeInfo, ViewType } from "../../utils/types";
import EventDetailModal from "../molecules/EventDetailModal";
import CreateEventModal from "../molecules/CreateEventModal";
import { sampleCourses } from "../../utils/sampleData";

const today = new TZDate();
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

const initialEvents: Partial<EventObject>[] = [
  {
    id: "1",
    calendarId: "1",
    title: "TOAST UI Calendar Study",
    category: "time",
    start: today,
    end: addHours(today, 3),
  },
  {
    id: "2",
    calendarId: "2",
    title: "Practice",
    category: "milestone",
    start: addDate(today, 1),
    end: addDate(today, 1),
    isReadOnly: true,
  },
  {
    id: "3",
    calendarId: "3",
    title: "FE Workshop",
    category: "allday",
    start: subtractDate(today, 2),
    end: subtractDate(today, 1),
    isReadOnly: true,
  },
  {
    id: "4",
    calendarId: "4",
    title: "Report",
    category: "time",
    start: today,
    end: addHours(today, 1),
  },
];

const DimspaceCalendar = ({ view }: { view: ViewType }) => {
  const calendarRef = useRef<typeof Calendar>(null);
  const [selectedDateRangeText, setSelectedDateRangeText] = useState("");
  const [selectedView, setSelectedView] = useState(view);

  const [selectedEvent, setSelectedEvent] = useState<Partial<EventObject>>({});
  const [selectedRange, setSelectedRange] = useState<
    SelectDateTimeInfo | undefined
  >(undefined);

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

  const onClickPrev = () => {
    getCalInstance()["prev"]();
    updateRenderRangeText();
  };

  const onClickNext = () => {
    getCalInstance()["next"]();
    updateRenderRangeText();
  };

  const onClickToday = () => {
    getCalInstance()["today"]();
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
            <Button onClick={onClickToday}>Today</Button>
            <Button onClick={onClickPrev}>Prev</Button>
            <Button onClick={onClickNext}>Next</Button>
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
        events={initialEvents}
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
