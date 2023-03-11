import { ButtonGroup, Button, Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CourseHeader = ({
  courseID,
  weekID,
}: {
  courseID: string;
  weekID?: string;
}) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <Center>
      <ButtonGroup isAttached m={1} gap={1}>
        <Button
          bgColor={pathname === `/course/${courseID}` ? "gray.500" : "gray.200"}
          _hover={{ bgColor: "gray.400" }}
          onClick={() => {
            navigate({
              pathname: `/course/${courseID}`,
            });
          }}
        >
          Home
        </Button>
        <Button
          bgColor={
            pathname === `/course/${courseID}/content/${weekID}`
              ? "gray.500"
              : "gray.200"
          }
          _hover={{ bgColor: "gray.400" }}
          onClick={() => {
            navigate({
              pathname: `/course/${courseID}/content/1`,
            });
          }}
        >
          Contents
        </Button>
        <Button
          bgColor={
            pathname === `/course/${courseID}/assignments`
              ? "gray.500"
              : "gray.200"
          }
          _hover={{ bgColor: "gray.400" }}
          onClick={() => {
            navigate({
              pathname: `/course/${courseID}/assignments`,
            });
          }}
        >
          Assignments
        </Button>
        <Button
          bgColor={
            pathname === `/course/${courseID}/quizzes` ? "gray.500" : "gray.200"
          }
          _hover={{ bgColor: "gray.400" }}
          onClick={() => {
            navigate({
              pathname: `/course/${courseID}/quizzes`,
            });
          }}
        >
          Quizzes
        </Button>
        <Button
          bgColor={
            pathname === `/course/${courseID}/discussions`
              ? "gray.500"
              : "gray.200"
          }
          _hover={{ bgColor: "gray.400" }}
          onClick={() => {
            navigate({
              pathname: `/course/${courseID}/discussions`,
            });
          }}
        >
          Discussions
        </Button>
        <Button
          bgColor={
            pathname === `/course/${courseID}/groups` ? "gray.500" : "gray.200"
          }
          _hover={{ bgColor: "gray.400" }}
          onClick={() => {
            navigate({
              pathname: `/course/${courseID}/groups`,
            });
          }}
        >
          Groups
        </Button>
        <Button
          bgColor={
            pathname === `/course/${courseID}/grades` ? "gray.500" : "gray.200"
          }
          _hover={{ bgColor: "gray.400" }}
          onClick={() => {
            navigate({
              pathname: `/course/${courseID}/grades`,
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
