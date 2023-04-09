import { DndContext, rectIntersection } from "@dnd-kit/core";
import KanbanLane from "./KanbanLane";
import AddCard from "./AddCard";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Cards } from "../../../utils/types";

export default function KanbanBoard() {
  const [todoItems, setTodoItems] = useState<Array<Cards>>(
    JSON.parse(localStorage.getItem("todoItems") ?? '""')
  );
  const [doneItems, setDoneItems] = useState<Array<Cards>>(
    JSON.parse(localStorage.getItem("doneItems") ?? '""')
  );
  const [inProgressItems, setInProgressItems] = useState<Array<Cards>>(
    JSON.parse(localStorage.getItem("inProgressItems") ?? '""')
  );

  const addNewCard = (title: string, courseName: string, deadline: string) => {
    setTodoItems([...todoItems, { title, courseName, deadline }]);
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  useEffect(() => {
    localStorage.setItem("inProgressItems", JSON.stringify(inProgressItems));
  }, [inProgressItems]);

  useEffect(() => {
    localStorage.setItem("doneItems", JSON.stringify(doneItems));
  }, [doneItems]);

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const title = e.active.data.current?.title ?? "";
        const courseName = e.active.data.current?.courseName ?? "";
        const deadline = e.active.data.current?.deadline ?? "";
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? "ToDo";
        if (container !== parent) {
          if (container === "ToDo") {
            setTodoItems([...todoItems, { title, courseName, deadline }]);
          } else if (container === "Done") {
            setDoneItems([...doneItems, { title, courseName, deadline }]);
          } else {
            setInProgressItems([
              ...inProgressItems,
              { title, courseName, deadline },
            ]);
          }
          if (parent === "ToDo") {
            setTodoItems([
              ...todoItems.slice(0, index),
              ...todoItems.slice(index + 1),
            ]);
          } else if (parent === "Done") {
            setDoneItems([
              ...doneItems.slice(0, index),
              ...doneItems.slice(index + 1),
            ]);
          } else {
            setInProgressItems([
              ...inProgressItems.slice(0, index),
              ...inProgressItems.slice(index + 1),
            ]);
          }
        }
      }}
    >
      <Flex flexDirection="column">
        <AddCard addCard={addNewCard} />
        <Flex flex="3">
          <KanbanLane title="ToDo" items={todoItems} />
          <KanbanLane title="In Progress" items={inProgressItems} />
          <KanbanLane title="Done" items={doneItems} />
        </Flex>
      </Flex>
    </DndContext>
  );
}
