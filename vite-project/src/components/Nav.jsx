import { useState, useEffect } from "react";
import { API_URL } from "./Const";
import "../style/Nav.css";

function Nav() {
  const [profileData, setProfileData] = useState({});

  async function getUserFolderData() {
    try {
      const response = await fetch(`${API_URL}/users/1`);
      const userData = await response.json();
      setProfileData(userData);
    } catch (error) {
      throw new Error("폴더 정보를 가져오는데 실패했습니다.");
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
        {profileData && profileData.data && profileData.data.length > 0 ? (
          <div className="user-profile">
            <img
              className="user-profile-img"
              src={profileData.data[0].image_source}
              alt="프로필 이미지"
            />
            <span className="user-profile-email">
              {profileData.data[0].email}
            </span>
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
