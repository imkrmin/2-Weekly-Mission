import { useState, useEffect } from "react";
import { API_URL } from "./Const";
import "../style/Header.css";

function Header() {
  const [folderData, setFolderData] = useState({});

  async function getUserFolderData() {
    const response = await fetch(`${API_URL}/folder`);

    if (!response.ok) {
      throw new Error("폴더 정보를 가져오는데 실패했습니다.");
    }
    const userFolderData = await response.json();
    return userFolderData;
  }

  if (!folderData.folder.owner) {
    throw new Error(`${folderData.owner}를 가져오는데 실패했습니다.`);
  }

  useEffect(() => {
    getUserFolderData().then(response => setFolderData(response));
  }, []);

  return (
    <div className="header-section">
      <div className="hearder-user-section">
        <img
          className="user-folder-img"
          src={folderData.folder.owner?.profileImageSource || ""}
          alt="폴더 프로필"
        />
        <span className="user-folder-owner">
          {folderData.folder.owner?.name || ""}
        </span>
      </div>
      <div>
        <span className="user-folder-name">{folderData.folder.name || ""}</span>
      </div>
    </div>
  );
}

export default Header;
