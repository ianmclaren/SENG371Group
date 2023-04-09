import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfileHeader from "../molecules/profile/ProfileHeader";
import ProfileSettings from "../molecules/profile/ProfileSettings";

const ProfilePage = () => {
  const storedValue = localStorage.getItem("fontMultiplier");
  const [textMultiplier, setTextMultiplier] = useState(
    storedValue === null ? 50 : JSON.parse(storedValue)
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
