import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateDiscussionButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      aria-label="New Discussion"
      _hover={{ bg: "transparent", color: "gray.600" }}
      border="1px"
      backgroundColor={"gray.100"}
      onClick={() => navigate("create")}
    >
      Start a New Discussion
    </Button>
  );
};

export default CreateDiscussionButton;
