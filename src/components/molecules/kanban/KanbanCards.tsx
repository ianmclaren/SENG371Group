import { Text, VStack } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const KanbanCard = ({
  title,
  courseName,
  deadline,
  index,
  parent,
}: {
  title: string;
  courseName: string;
  deadline: string;
  index: number;
  parent: string;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      courseName,
      deadline,
      index,
      parent,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  
  return (
    <VStack
      p={3}
      bgColor="white"
      margin="2"
      borderRadius="8"
      transform={style.transform}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      textAlign='center'
      _dark={{
        bgColor: "gray.600"
      }}
      _hover={{
        shadow: "xl",
        _dark: {
          shadow: "dark-lg",
        },
      }}
    >
      <Text fontSize='md'>{title}</Text>
      <Text fontSize='sm'>{courseName}</Text>
      <Text fontSize='xs'>{deadline}</Text>
    </VStack>
  );
};