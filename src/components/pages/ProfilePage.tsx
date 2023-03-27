import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfileHeader from "../molecules/profile/ProfileHeader";
import ProfileSettings from "../molecules/profile/ProfileSettings";

const ProfilePage = () => {
  const [textMultiplier, setTextMultiplier] = useState(
    JSON.parse(localStorage.getItem("fontMultiplier") ?? "") ?? 50
  );

  useEffect(() => {
    localStorage.setItem("fontMultiplier", JSON.stringify(textMultiplier));
  }, [textMultiplier]);

  return (
    <Box>
      <ProfileHeader />
      <ProfileSettings
        textMultiplier={textMultiplier}
        setTextMultiplier={setTextMultiplier}
      />
    </Box>
  );
};

export default ProfilePage;
