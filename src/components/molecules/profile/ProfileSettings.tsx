import { SettingsIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProfileSettings = ({
  textMultiplier,
  setTextMultiplier,
}: {
  textMultiplier: number;
  setTextMultiplier: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [sliderValue, setSliderValue] = React.useState(50);
  const [email, setEmail] = React.useState("johnsmith@gmail.com");

  const buttonStyle = {
    bgColor: "gray.200",
    _hover: { shadow: "xl" },
    _dark: {
      bgColor: "gray.600",
      _hover: { shadow: "dark-lg" },
    },
  };

  const transformFontSize = (size: string) => {
    console.log(size);
    switch (size) {
      case "3xl":
        return textMultiplier === 0
          ? "xl"
          : textMultiplier === 25
          ? "2xl"
          : textMultiplier === 50
          ? "3xl"
          : textMultiplier === 75
          ? "4xl"
          : "5xl";
      case "xl":
        return textMultiplier === 0
          ? "md"
          : textMultiplier === 25
          ? "lg"
          : textMultiplier === 50
          ? "xl"
          : textMultiplier === 75
          ? "2xl"
          : "3xl";
      case "md":
        return textMultiplier === 0
          ? "xs"
          : textMultiplier === 25
          ? "sm"
          : textMultiplier === 50
          ? "md"
          : textMultiplier === 75
          ? "lg"
          : "xl";
      case "sm":
        return textMultiplier === 0
          ? "xs"
          : textMultiplier === 25
          ? "sm"
          : textMultiplier === 50
          ? "md"
          : textMultiplier === 75
          ? "lg"
          : "lg";
      default:
        return size;
    }
  };

  return (
    <HStack gap={10}>
      <Box p={3}>
        <HStack p={4}>
          <Text fontWeight="medium" fontSize={transformFontSize("3xl")}>
            User Preference
          </Text>
          <Icon
            fontSize={transformFontSize("xl")}
            as={ViewIcon}
            aria-label="Profile Settings"
            _hover={{ bg: "transparent", color: "gray.600" }}
          />
        </HStack>
        <HStack p={4} gap={5}>
          <Text fontSize={transformFontSize("xl")}>Set font size</Text>
          <Slider
            id="slider"
            width="55%"
            value={sliderValue}
            min={0}
            step={25}
            max={100}
            colorScheme="gray"
            onChange={(v) => setSliderValue(v)}
          >
            <SliderMark
              value={0}
              mt="1"
              ml="-2.5"
              fontSize={transformFontSize("sm")}
            >
              Small
            </SliderMark>
            <SliderMark
              value={50}
              mt="1"
              ml="-2.5"
              fontSize={transformFontSize("sm")}
            >
              Medium
            </SliderMark>
            <SliderMark
              value={100}
              mt="1"
              ml="-2.5"
              fontSize={transformFontSize("sm")}
            >
              Large
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Button
            {...buttonStyle}
            borderRadius={20}
            paddingInline={5}
            cursor="pointer"
            transition="all 0.1s ease-in-out"
            fontSize={transformFontSize("md")}
            fontWeight="medium"
            onClick={() => {
              setTextMultiplier(sliderValue);
            }}
          >
            Save
          </Button>
        </HStack>
        <Spacer height={5} />
        <HStack p={4} gap={5}>
          <Text fontSize={transformFontSize("xl")}>Set preferred email</Text>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button
            {...buttonStyle}
            borderRadius={20}
            paddingInline={5}
            cursor="pointer"
            fontSize={transformFontSize("md")}
            fontWeight="medium"
            transition="all 0.1s ease-in-out"
          >
            Save
          </Button>
        </HStack>
      </Box>
      <Box p={3}>
        <HStack p={4}>
          <Text fontWeight="medium" fontSize={transformFontSize("3xl")}>
            Account Settings
          </Text>
          <Icon
            fontSize={transformFontSize("xl")}
            as={SettingsIcon}
            aria-label="Profile Settings"
            _hover={{ bg: "transparent", color: "gray.600" }}
          />
        </HStack>
        <HStack p={4} gap={5}>
          <Text fontSize={transformFontSize("xl")}>
            Get notifications in email
          </Text>
          <RadioGroup defaultValue="1">
            <Stack spacing={5} direction="row">
              <Radio colorScheme="gray" value="1">
                Yes
              </Radio>
              <Radio colorScheme="gray" value="2">
                No
              </Radio>
            </Stack>
          </RadioGroup>
          <Button
            {...buttonStyle}
            borderRadius={20}
            paddingInline={5}
            cursor="pointer"
            fontSize={transformFontSize("md")}
            fontWeight="medium"
            transition="all 0.1s ease-in-out"
          >
            Save
          </Button>
        </HStack>
        <Spacer height={5} />
        <HStack p={4} gap={5}>
          <Text fontSize={transformFontSize("xl")}>
            Allow messages from peers
          </Text>
          <RadioGroup defaultValue="1">
            <Stack spacing={5} direction="row">
              <Radio colorScheme="gray" value="1">
                Yes
              </Radio>
              <Radio colorScheme="gray" value="2">
                No
              </Radio>
            </Stack>
          </RadioGroup>
          <Button
            {...buttonStyle}
            borderRadius={20}
            paddingInline={5}
            cursor="pointer"
            fontSize={transformFontSize("md")}
            fontWeight="medium"
            transition="all 0.1s ease-in-out"
          >
            Save
          </Button>
        </HStack>
      </Box>
    </HStack>
  );
};

export default ProfileSettings;
