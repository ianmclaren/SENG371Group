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
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  
  const buttonStyle = {
    bgColor: "gray.200",
    _hover: { shadow: "xl" },
    _dark: {
      bgColor: "gray.600",
      _hover: { shadow: "dark-lg" }
    },
  }

  return (
    <HStack gap={10}>
    <Box p={3}>
        <Button fontWeight="medium" fontSize="3xl"
          _hover={{ bg: "transparent", color: "gray.600" }}
          rightIcon={
            <Icon
              fontSize="xl"
              as={ViewIcon}
              aria-label="Profile Settings"
              _hover={{ bg: "transparent", color: "gray.600" }}
            />
          }>
            User Preference
        </Button>
        <HStack p={4} gap={5}>
            <Text fontSize="xl">Set font size</Text>
            <Slider
                id='slider'
                width="58%"
                defaultValue={50}
                min={0}
                max={100}
                colorScheme='gray'
                onChange={(v) => setSliderValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
                    25%
                </SliderMark>
                <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                    50%
                </SliderMark>
                <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                    75%
                </SliderMark>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg='teal.500'
                    color='white'
                    placement='top'
                    isOpen={showTooltip}
                    label={`${sliderValue}%`}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
            <Button {...buttonStyle} borderRadius={20} paddingInline={5}
              cursor="pointer"
              transition="all 0.1s ease-in-out">
                <Text fontWeight="medium">Save</Text>
            </Button>
        </HStack>
        <Spacer height={5}/>
        <HStack p={4} gap={5}>
            <Text fontSize="xl">Set color palette</Text>
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
              transition="all 0.1s ease-in-out">
                <Text fontWeight="medium">Save</Text>
            </Button>
        </HStack>
    </Box>
    <Box p={3}>
        <Button fontWeight="medium" fontSize="3xl"
          _hover={{ bg: "transparent", color: "gray.600" }}
          rightIcon={
            <Icon
              fontSize="xl"
              as={SettingsIcon}
              aria-label="Profile Settings"
              _hover={{ bg: "transparent", color: "gray.600" }}
            />
          }>
            Account Settings
        </Button>
        <HStack p={4} gap={5}>
            <Text fontSize="xl">Get notifications in email</Text>
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
              transition="all 0.1s ease-in-out">
                <Text fontWeight="medium">Save</Text>
            </Button>
        </HStack>
        <Spacer height={5}/>
        <HStack p={4} gap={5}>
            <Text fontSize="xl">Allow messages from peers</Text>
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
              transition="all 0.1s ease-in-out">
                <Text fontWeight="medium">Save</Text>
            </Button>
        </HStack>
    </Box>
    </HStack>
  );
};

export default ProfileSettings;