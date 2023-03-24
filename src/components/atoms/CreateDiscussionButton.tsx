import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateDiscussionButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      aria-label="New Discussion"
      rightIcon={<PlusSquareIcon />}
      _hover={{ bg: "transparent", color: "gray.600" }}
      _dark={{color: "black"}}
      border="1px"
      backgroundColor={"gray.100"}
      onClick={() => navigate("create")}
    >
      New Discussion
    </Button>
  );
};

export default CreateDiscussionButton;
