import React, { useState } from "react";
import "../../style/AddLinkModal.css";

interface Folder {
  id: number;
  name: string;
  link?: {
    count: number;
  };
}

interface FoldersData {
  data: Folder[];
}

interface AddLinkModalProps {
  onClose: () => void;
  folders: FoldersData | null;
}

const AddLinkModal: React.FC<AddLinkModalProps> = ({ onClose, folders }) => {
  const [selectedFolder, setSelectedFolder] = useState("");

  const handleFolderSelect = (folderName: string) => {
    setSelectedFolder(folderName);
  };

  return (
    <div className="addlinkmodal-section">
      <div className="addlinkmodal-title-section">
        <div className="addlinkmodal-maintitle">폴더에 추가</div>
        <div className="addlinkmodal-subtitle">링크 주소</div>
      </div>
      <div className="addlinkmodal-folder-list">
        {folders?.data?.map(folder => (
          <button
            key={folder.id}
            className={`addlinkmodal-folder-list-btns ${
              selectedFolder === folder.name ? "selected" : ""
            }`}
            type="button"
            onClick={() => handleFolderSelect(folder.name)}
          >
            <div
              className={`addlinkmodal-folder-list-btn-name ${
                selectedFolder === folder.name ? "selected" : ""
              }`}
            >
              {folder.name}
            </div>
            <div className="addlinkmodal-folder-list-btn-count">
              {folder?.link?.count}개 링크
            </div>
            <img
              src="../../src/assets/check.svg"
              className={`addlinkmodal-folder-list-btn-check ${
                selectedFolder === folder.name ? "selected" : ""
              }`}
              alt="체크 아이콘"
            />
          </button>
        ))}
      </div>
      <button
        className="addlinkmodal-folder-addbtn"
        type="submit"
        onClick={onClose}
      >
        추가하기
      </button>
      <button className="addlinkmodal-folder-closebtn" onClick={onClose}>
        <img src="../../src/assets/close.svg" alt="닫기 아이콘" />
      </button>
    </div>
  );
};

export default AddLinkModal;
