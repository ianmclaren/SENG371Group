import { Flex, Text, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function AddCard({addCard}: { addCard: (title: string) => void;}) 
{
  const [title, setTitle] = useState<string>("");

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
      />
      <Text flex="2" textAlign="center">
        Deadline
      </Text>
      <Input
        type="datetime-local"
        flex="4"
        required
      />
      <Button
        flex="1"
        marginX="3"
        bgColor="blue.400"
        color="white"
        onClick={() => {
          setTitle("");
          addCard(title);
        }}
        _hover = {{
            bgColor : "blue.700"
        }}
      >
        Add Task
      </Button>
    </Flex>
  );
}