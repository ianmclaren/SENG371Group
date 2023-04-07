import { Flex, Text, Button, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function AddCard({addCard}: { addCard: (title: string, courseName: string, deadline: string) => void;}) 
{
  const [title, setTitle] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");
  const [deadline, setDeadline] = useState("");
  const dateInputRef = useRef(null);

  return (
    <Flex p="5" alignItems="center">
      <Text flex="2" textAlign="center">
        Task Title
      </Text>
      <Input
        type="text"
        flex="3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <Text flex="2" textAlign="center">
        Course
      </Text>
      <Input
        type="text"
        flex="2"
        onChange={(e) => setCourseName(e.target.value)}
        value={courseName}
        required
      />
      <Text flex="2" textAlign="center">
        Deadline
      </Text>
      <Input
        type="datetime-local"
        flex="5"
        onChange={(e) => setDeadline(e.target.value)}
        ref={dateInputRef}
        required
      />
      <Button
        flex="1"
        marginX="3"
        bgColor="blue.400"
        color="white"
        onClick={() => {
          addCard(title,courseName,deadline);
          setTitle("");
          setCourseName("");
          setDeadline("");
        }}
        _hover = {{
            bgColor : "blue.700"
        }}
        disabled = {!title}
      >
        Add Task
      </Button>
    </Flex>
  );
}