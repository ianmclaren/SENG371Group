import { Box, Text, VStack, HStack, Button, Icon } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { transformFontSize } from "../../../utils/helper";

const ProfileHeader = () => {
  const buttonStyle = {
    bgColor: "gray.200",
    _hover: { shadow: "xl" },
    _dark: {
      bgColor: "gray.600",
      _hover: { shadow: "dark-lg" },
    },
  };

  return (
    <HStack p={4} margin={4} border="solid" borderRadius={10} borderWidth={2}>
      <Box width="12%">
        <VStack p={1}>
          <img
            src="https://media.istockphoto.com/id/507995592/photo/pensive-man-looking-at-the-camera.jpg?s=170667a&w=0&k=20&c=gEjwbwM9D_0PERe2yR_b8dec_F1e6FrLf7yvWTdm4NY="
            alt="profile"
            style={{ maxWidth: "100%", borderRadius: "7%", overflow: "hidden" }}
          />
          <HStack width="100%">
            <Button
              {...buttonStyle}
              borderRadius={20}
              paddingInline={5}
              cursor="pointer"
              fontSize={transformFontSize("md")}
              fontWeight="medium"
              transition="all 0.1s ease-in-out"
            >
              Change Picture
            </Button>
            <Icon
              as={DeleteIcon}
              fontSize={transformFontSize("xl")}
              _hover={{ color: "gray.500" }}
            />
          </HStack>
        </VStack>
      </Box>
      <HStack w="100%" p={3} gap={100}>
        <Box width="45%">
          <Text
            fontWeight="medium"
            fontSize={transformFontSize("xl")}
            letterSpacing={3}
            textTransform="uppercase"
          >
            John Smith
          </Text>
          <Text fontWeight="light" fontSize={transformFontSize("sm")}>
            V00123456
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight="medium"
            fontSize={transformFontSize("xl")}
            letterSpacing={3}
            textTransform="uppercase"
          >
            BIO
          </Text>
          <Text fontWeight="light" fontSize={transformFontSize("sm")}>
            Lorem ipsum dolor sit amet. Sed iusto molestiae est blanditiis
            dolore aut voluptatem beatae nam iure reprehenderit ut obcaecati
            rerum aut exercitationem consectetur. Id necessitatibus debitis hic
            explicabo reprehenderit nam praesentium.
          </Text>
          <HStack width="100%">
            <Button
              {...buttonStyle}
              borderRadius={20}
              paddingInline={5}
              cursor="pointer"
              fontSize={transformFontSize("md")}
              fontWeight="medium"
              transition="all 0.1s ease-in-out"
            >
              Edit Bio
            </Button>
            <Icon
              as={DeleteIcon}
              fontSize={transformFontSize("xl")}
              _hover={{ color: "gray.500" }}
            />
          </HStack>
        </Box>
      </HStack>
    </HStack>
  );
};

export default ProfileHeader;
