import { Flex, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Form, Formik } from 'formik';

export default function AddCard({addCard}: { addCard: (title: string, courseName: string, deadline: string) => void;}) 
{
  const [title, setTitle] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");
  const [deadline, setDeadline] = useState("");
  const dateInputRef = useRef(null);

  return (
    <Flex p="5" alignItems="center">
      <Formik
        initialValues={{ title: '', courseName:'', deadline:''}}
        onSubmit={(_,actions) => {
          addCard(title,courseName,deadline);
          setTitle("");
          setCourseName("");
          setDeadline("");
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <Flex gap={4}>
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
              <Input
                type="text"
                onChange={(e) => setCourseName(e.target.value)}
                value={courseName}
              />
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