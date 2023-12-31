import { useState } from "react";
import "../style/CardListFolderMenu.css";

function CardListFolderMenu({ cardListMenuData, onFolderSelect }) {
  const [selectedFolder, setSelectedFolder] = useState("전체");

  const handleFolderSelect = folderName => {
    setSelectedFolder(folderName);
    onFolderSelect(folderName);
  };

  return (
    <div className="cardlistfoldermenu-section">
      <div className="cardlistfoldermenu-btns">
        <button
          className={`cardlistfoldermenu-btn ${
            selectedFolder === "전체" ? "selected" : ""
          }`}
          type="button"
          onClick={() => handleFolderSelect("전체")}
        >
          전체
        </button>
        {cardListMenuData?.data?.map(folder => (
          <button
            key={folder.id}
            className={`cardlistfoldermenu-btn ${
              selectedFolder === folder.name ? "selected" : ""
            }`}
            type="button"
            onClick={() => handleFolderSelect(folder.name)}
          >
            {folder.name}
          </button>
        ))}
      </div>
      <button className="cardlistfoldermenu-addbtn" type="button">
        <img src="src/assets/add.svg" alt="추가버튼" />
        <span className="addbtn-text">폴더 추가</span>
      </button>
    </div>
  );
}

export default CardListFolderMenu;
