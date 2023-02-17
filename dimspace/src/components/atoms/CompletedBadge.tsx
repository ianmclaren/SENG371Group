import { CheckCircleIcon } from "@chakra-ui/icons";
import { Icon, Tooltip } from "@chakra-ui/react";

const CompletedBadge = () => {
  return (
    <Tooltip label="You have completed this course!" placement="top">
      <Icon
        as={CheckCircleIcon}
        pos="absolute"
        top={4}
        right={4}
        fontSize="xl"
        color="white"
      />
    </Tooltip>
  );
};

export default CompletedBadge;
