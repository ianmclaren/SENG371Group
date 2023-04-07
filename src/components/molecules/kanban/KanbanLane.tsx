import { Flex, Text } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import { Cards } from "../../../utils/types";
import { KanbanCard } from "./KanbanCards";

interface KanbanLaneProps {
  title: string;
  items: Cards[];
}

export default function KanbanLane({ title, items }: KanbanLaneProps) {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  return (
    <Flex flex="3" padding="5" flexDirection="column" minH="sm">
      <Text fontWeight="bold" textAlign={'center'} textTransform={'uppercase'} letterSpacing={2}>{title}</Text>
      <Flex
        ref={setNodeRef}
        backgroundColor="gray.300"
        borderRadius="8"
        flex="1"
        padding="2"
        flexDirection="column"
      >
        {items.map(({ title: cardTitle, courseName, deadline }, key) => (
          <KanbanCard title={cardTitle} courseName={courseName} deadline={deadline} key={key} index={key} parent={title} />
        ))}
      </Flex>
    </Flex>
  );
}