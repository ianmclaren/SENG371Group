import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateDiscussionButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      aria-label="New Discussion"
      rightIcon={<PlusSquareIcon />}
      _hover={{
        backgroundColor: "gray.300",
        _dark: {
          backgroundColor: "gray.800",
        },
      }}
      border="1px"
      backgroundColor={"gray.100"}
      _dark={{
        backgroundColor: "gray.600",
      }}
      onClick={() => navigate("create")}
    >
      New Discussion
    </Button>
  );
};

export default CreateDiscussionButton;
