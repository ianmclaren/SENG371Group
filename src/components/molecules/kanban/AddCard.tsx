import { Flex, Button, Input, FormControl, FormLabel, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Form, Formik } from 'formik';
import { sampleCourses } from "../../../utils/sampleData";

export default function AddCard({addCard}: { addCard: (title: string, courseName: string, deadline: string) => void;}) 
{
  const [title, setTitle] = useState<string>("");
  const [deadline, setDeadline] = useState("");
  const dateInputRef = useRef(null);
  const [course, setCourse] = useState("0");
  const [isCourseSelectOpen, setIsCourseSelectOpen] = useState(false);

  return (
    <Flex p="5" alignItems="center">
      <Formik
        initialValues={{ title: '', courseName:'', deadline:''}}
        onSubmit={(_,actions) => {
          addCard(title,sampleCourses.find((c) => c.id === course)?.name || "",deadline);
          setTitle("");
          setCourse("0");
          setDeadline("");
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <Flex gap={8}>
            <FormControl isRequired>
              <FormLabel textAlign="center">
                Task Title
              </FormLabel>
              <Input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel textAlign="center">
                Course
              </FormLabel>
              <Popover
                isOpen={isCourseSelectOpen}
                onOpen={() => setIsCourseSelectOpen(true)}
                onClose={() => setIsCourseSelectOpen(false)}
              >
                <PopoverTrigger>
                  <Button
                    paddingInline={20}
                    bgColor={sampleCourses.find((c) => c.id === course)?.color || "gray.400"}
                    _hover={{
                      bgColor: sampleCourses.find((c) => c.id === course)
                        ?.darkColor,
                      color: "white",
                    }}
                  >
                    {sampleCourses.find((c) => c.id === course)?.name ||
                      "Select Course"}
                  </Button>
                </PopoverTrigger>
                <PopoverArrow />
                <PopoverBody>
                  <PopoverContent>
                    <ButtonGroup isAttached flexDirection="column" paddingInline={20}>
                      {sampleCourses.map((c) => (
                        <Button
                          isActive={c.id === course}
                          _active={{
                            bgColor: c.color,
                          }}
                          key={c.id}
                          onClick={() => {
                            setCourse(c.id);
                            setIsCourseSelectOpen(false);
                          }}
                        >
                          {c.name}
                        </Button>
                      ))}
                    </ButtonGroup>
                  </PopoverContent>
                </PopoverBody>
              </Popover>
            </FormControl>
            <FormControl isRequired>
              <FormLabel textAlign="center">
                Deadline
              </FormLabel>
              <Input
                type="datetime-local"
                onChange={(e) => setDeadline(e.target.value)}
                ref={dateInputRef}
                value={deadline}
              />
            </FormControl>
            <Button
              type="submit"
              padding={9}
              bgColor="blue.400"
              color="white"
              _hover = {{
                  bgColor : "blue.700"
              }}
              isLoading={props.isSubmitting}
              isDisabled={course==="0"}
            >
              Add Task
            </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
}