import { useState } from "react";
import { getUserProfile } from "./Api";

function UserProfile() {
  const [userProfile, setUserProfile] = useState();

  // setUserProfile(getUserProfile);
  const 확인 = getUserProfile();
  console.log(확인);
}

export default UserProfile;
