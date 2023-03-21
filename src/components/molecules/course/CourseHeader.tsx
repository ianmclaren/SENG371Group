import { ButtonGroup, Button, Center } from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CourseHeader = () => {
  const navigate = useNavigate();
  const { courseid, discussionid, weekid } = useParams();

  const { pathname } = useLocation();

  const buttonStyle = {
    bgColor: "gray.300",
    _hover: { bgColor: "gray.400" },
    _dark: {
      bgColor: "gray.700",
      _hover: { bgColor: "gray.800" },
    },
    _active: { bgColor: "gray.400", _dark: { bgColor: "gray.800" } },
  };

  return (
    <Center>
      <ButtonGroup isAttached m={1} gap={1}>
        <Button
          {...buttonStyle}
          isActive={pathname === `/course/${courseid}`}
          onClick={() => {
            navigate({
              pathname: `/course/${courseid}`,
            });
          }}
        >
          Home
        </Button>
        <Button
          {...buttonStyle}
          isActive={pathname === `/course/${courseid}/content/${weekid}`}
          onClick={() => {
            navigate({
              pathname: `/course/${courseid}/content/1`,
            });
          }}
        >
          Contents
        </Button>
        <Button
          {...buttonStyle}
          isActive={pathname === `/course/${courseid}/assignments`}
          onClick={() => {
            navigate({
              pathname: `/course/${courseid}/assignments`,
            });
          }}
        >
          Assignments
        </Button>
        <Button
          {...buttonStyle}
          isActive={pathname === `/course/${courseid}/quizzes`}
          onClick={() => {
            navigate({
              pathname: `/course/${courseid}/quizzes`,
            });
          }}
        >
          Quizzes
        </Button>
        <Button
          {...buttonStyle}
          isActive={
            pathname === `/course/${courseid}/discussions` ||
            pathname === `/course/${courseid}/discussion/${discussionid}` ||
            pathname === `/course/${courseid}/discussions/create`
          }
          onClick={() => {
            navigate({
              pathname: `/course/${courseid}/discussions`,
            });
          }}
        >
          Discussions
        </Button>
        <Button
          {...buttonStyle}
          isActive={pathname === `/course/${courseid}/groups`}
          onClick={() => {
            navigate({
              pathname: `/course/${courseid}/groups`,
            });
          }}
        >
          Groups
        </Button>
        <Button
          {...buttonStyle}
          isActive={pathname === `/course/${courseid}/grades`}
          onClick={() => {
            navigate({
              pathname: `/course/${courseid}/grades`,
            });
          }}
        >
          Grades
        </Button>
      </ButtonGroup>
    </Center>
  );
};

export default CourseHeader;
