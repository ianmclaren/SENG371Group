import { SettingsIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, 
         Button, 
         HStack, 
         Icon, 
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
         Tooltip } from "@chakra-ui/react";
import React from "react";

const ProfileSettings = () => {
  var savedValue = localStorage.getItem("fontMultiplier")
  var fontMultiplier = savedValue !== null ? JSON.parse(savedValue) : 100;
  const [sliderValue, setSliderValue] = React.useState(fontMultiplier);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const buttonStyle = {
    bgColor: "gray.200",
    _hover: { shadow: "xl" },
    _dark: {
      bgColor: "gray.600",
      _hover: { shadow: "dark-lg" }
    },
  }

  const transformFontSize= (size: string) => {
    console.log(size);
    switch(size){
        case "3xl":
            return (30*fontMultiplier/100).toString()+"px";
        case "xl":
            return (20*fontMultiplier/100).toString()+"px";
        case "md":
            return (16*fontMultiplier/100).toString()+"px";
        case "sm":
            return (14*fontMultiplier/100).toString()+"px";
        default:
            return "16px";
    }
  }

  return (
    <HStack gap={10}>
      <Box p={3}>
        <HStack p={4}>
            <Text fontWeight="medium" fontSize={transformFontSize("3xl")}
                _hover={{ bg: "transparent", color: "gray.600" }}>
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
                id='slider'
                width="55%"
                defaultValue={fontMultiplier}
                min={50}
                max={150}
                colorScheme='gray'
                onChange={(v) => setSliderValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderMark value={75} mt='1' ml='-2.5' fontSize={transformFontSize("sm")}>
                    75%
                </SliderMark>
                <SliderMark value={100} mt='1' ml='-2.5' fontSize={transformFontSize("sm")}>
                    100%
                </SliderMark>
                <SliderMark value={125} mt='1' ml='-2.5' fontSize={transformFontSize("sm")}>
                    125%
                </SliderMark>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg='gray.500'
                    color='white'
                    placement='top'
                    isOpen={showTooltip}
                    label={`${sliderValue}%`}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
            <Button {...buttonStyle} 
              borderRadius={20} 
              paddingInline={5}
              cursor="pointer"
              transition="all 0.1s ease-in-out"
              fontSize={transformFontSize("md")}
              fontWeight="medium"
              onClick={() => localStorage.setItem("fontMultiplier", JSON.stringify(sliderValue))}
            >
                Save
            </Button>
        </HStack>
        <Spacer height={5}/>
        <HStack p={4} gap={5}>
            <Text fontSize={transformFontSize("xl")}>Set color palette</Text>
            <RadioGroup defaultValue='2'>
                <Stack spacing={5} direction='row'>
                    <Radio colorScheme='yellow' value='1'>
                        Yellow
                    </Radio>
                    <Radio colorScheme='gray' value='2'>
                        Gray
                    </Radio>
                    <Radio colorScheme='pink' value='3'>
                        Pink
                    </Radio>
                    <Radio colorScheme='teal' value='4'>
                        Teal
                    </Radio>
                </Stack>
            </RadioGroup>
            <Button {...buttonStyle} borderRadius={20} paddingInline={5}
              cursor="pointer"
              fontSize={transformFontSize("md")}
              fontWeight="medium"
              transition="all 0.1s ease-in-out">
                Save
            </Button>
        </HStack>
    </Box>
    <Box p={3}>
        <HStack p={4}>
            <Text fontWeight="medium" fontSize={transformFontSize("3xl")}
                _hover={{ bg: "transparent", color: "gray.600" }}>
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
            <Text fontSize={transformFontSize("xl")}>Get notifications in email</Text>
            <RadioGroup defaultValue='1'>
                <Stack spacing={5} direction='row'>
                    <Radio colorScheme='gray' value='1'>
                        Yes
                    </Radio>
                    <Radio colorScheme='gray' value='2'>
                        No
                    </Radio>
                </Stack>
            </RadioGroup>
            <Button {...buttonStyle} borderRadius={20} paddingInline={5}
              cursor="pointer"
              fontSize={transformFontSize("md")}
              fontWeight="medium"
              transition="all 0.1s ease-in-out">
                Save
            </Button>
        </HStack>
        <Spacer height={5}/>
        <HStack p={4} gap={5}>
            <Text fontSize={transformFontSize("xl")}>Allow messages from peers</Text>
            <RadioGroup defaultValue='1'>
                <Stack spacing={5} direction='row'>
                    <Radio colorScheme='gray' value='1'>
                        Yes
                    </Radio>
                    <Radio colorScheme='gray' value='2'>
                        No
                    </Radio>
                </Stack>
            </RadioGroup>
            <Button {...buttonStyle} borderRadius={20} paddingInline={5}
              cursor="pointer"
              fontSize={transformFontSize("md")}
              fontWeight="medium"
              transition="all 0.1s ease-in-out">
                Save
            </Button>
        </HStack>
      </Box>
    </HStack>
  );
};

export default ProfileSettings;