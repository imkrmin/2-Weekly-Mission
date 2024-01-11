import React from "react";
import "../../style/AddFolderModal.css";

interface AddFolderModalProps {
  onClose: () => void;
}

const AddFolderModal: React.FC<AddFolderModalProps> = ({ onClose }) => {
  return (
    <div className="addfoldermodal-section">
      <div className="addfoldermodal-title">폴더 추가</div>
      <input
        className="addfoldermodal-input"
        placeholder="내용을 입력하세요."
      />
      <button className="addfoldermodal-addbtn" type="submit" onClick={onClose}>
        추가하기
      </button>
      <button className="addfoldermodal-closebtn" onClick={onClose}>
        <img src="../../src/assets/close.svg" alt="닫기 아이콘" />
      </button>
    </div>
  );
};

export default AddFolderModal;
