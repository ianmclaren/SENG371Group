import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const CreateDiscussionButton = () => {
  const [queryParameters] = useSearchParams();
  var id = queryParameters.get("courseID");
  const courseID = id == null ? '': id; // edit if you know a more graceful way to handle the null
  const navigate = useNavigate();
  
  return (
    <Button
      aria-label="New Discussion"
      _hover={{ bg: "transparent", color: "gray.600" }}
      border="1px"
      backgroundColor={"gray.100"}
      onClick={() => navigate(`create?courseID=${courseID}&week=1`)}
    >
      Start a New Discussion
    </Button>
  );
};

export default CreateDiscussionButton;