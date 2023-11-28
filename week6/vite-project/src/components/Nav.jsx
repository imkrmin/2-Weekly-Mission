import { useState, useEffect } from "react";
import { API_URL } from "./Const";
import "../style/Nav.css";

function Nav() {
  const [profileData, setProfileData] = useState({});

  async function getUserProfileData() {
    const response = await fetch(`${API_URL}/user`);

    if (!response.ok) {
      throw new Error("프로필을 가져오는데 실패했습니다.");
    }
    const userData = await response.json();
    return userData;
  }

  useEffect(() => {
    getUserProfileData().then(response => setProfileData(response));
    // console.log(profileData);
  }, []);

  // console.log(profileData);

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
        {profileData ? (
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
