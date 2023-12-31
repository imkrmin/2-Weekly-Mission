import { useState, useEffect } from "react";
import {
  SHARED_PAGE_API_URL,
  FOLDER_PAGE_API_URL,
} from "../constants/constant";
import "../style/Nav.css";

function Nav() {
  const apiUrl =
    window.location.pathname === "/folder"
      ? `${FOLDER_PAGE_API_URL}/1`
      : `${SHARED_PAGE_API_URL}/user`;

  const [profileData, setProfileData] = useState({});

  async function getUserFolderData() {
    try {
      const response = await fetch(apiUrl);
      const userData = await response.json();

      const formattedData =
        window.location.pathname === "/folder"
          ? {
              id: userData.data[0].id,
              name: userData.data[0].name,
              email: userData.data[0].email,
              profileImageSource: userData.data[0].image_source,
            }
          : {
              id: userData.id,
              name: userData.name,
              email: userData.email,
              profileImageSource: userData.profileImageSource,
            };

      setProfileData(formattedData);
    } catch (error) {
      throw new Error("프로필 정보를 가져오는데 실패했습니다.");
    }
  }

  useEffect(() => {
    getUserFolderData();
  }, []);

  return (
    <nav>
      <div className="gnb">
        <a href="index.html">
          <img
            className="logo"
            src="../src/assets/logo.svg"
            alt="홈으로 연결된 Linkbrary 로고"
          />
        </a>
        {profileData && profileData.id ? (
          <div className="user-profile">
            <img
              className="user-profile-img"
              src={profileData.profileImageSource}
              alt="프로필 이미지"
            />
            <span className="user-profile-email">{profileData.email}</span>
          </div>
        ) : (
          <a className="cta cta-short" href="signin.html">
            <span>로그인</span>
          </a>
        )}
      </div>
    </nav>
  );
}

export default Nav;
