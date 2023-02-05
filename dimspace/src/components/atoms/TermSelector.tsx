import {
  Button,
  Heading,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Term } from "../../utils/types";

const TermSelector = ({
  term,
  setTerm,
}: {
  term: Term;
  setTerm: (term: Term) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <Heading
          fontSize="2xl"
          fontWeight="light"
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
        >
          {term}
        </Heading>
      </PopoverTrigger>
      <PopoverContent>
        <VStack align="stretch" spacing={0} shadow="lg">
          {[
            "All",
            "Spring 2023",
            "Fall 2022",
            "Summer 2022",
            "Spring 2022",
          ].map((option) => (
            <Button
              key={option}
              onClick={() => {
                setTerm(option as Term);
                onClose();
              }}
              _hover={{ bg: "gray.100" }}
              _focus={{ bg: "gray.100" }}
              _active={{ bg: "gray.100" }}
              isActive={option === term}
            >
              {option}
            </Button>
          ))}
        </VStack>
      </PopoverContent>
    </Popover>
  );
};

export default TermSelector;
