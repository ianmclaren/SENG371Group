import { Box, } from "@chakra-ui/react";
import ProfileHeader from "../molecules/profile/ProfileHeader";
import ProfileSettings from "../molecules/profile/ProfileSettings";

const ProfilePage = () => {

  return (
    <Box>
      <ProfileHeader/>
      <ProfileSettings/>
    </Box>
  );
};

export default ProfilePage;
