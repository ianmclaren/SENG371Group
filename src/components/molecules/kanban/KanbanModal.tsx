import {
    useDisclosure, 
    Button, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody, 
    ModalFooter } from "@chakra-ui/react";
import KanbanBoard from "./KanbanBoard";

const KanbanModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Task Tracker</Button>
  
        <Modal 
          isOpen={isOpen}
          onClose={onClose}
          size={'4xl'}
          isCentered
          >
          <ModalOverlay 
            backdropFilter='blur(10px) hue-rotate(90deg)'
          />
          <ModalContent>
            <ModalHeader>Track your tasks</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <KanbanBoard/>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Save
              </Button>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default KanbanModal;