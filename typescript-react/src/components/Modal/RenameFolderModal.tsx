import React from "react";
import "../../style/RenameFolderModal.css";

interface RenameFolderModalProps {
  name: string;
  onClose: () => void;
}

const RenameFolderModal: React.FC<RenameFolderModalProps> = ({
  name,
  onClose,
}) => {
  return (
    <div className="renamefoldermodal-section">
      <div className="renamefoldermodal-title">폴더 추가</div>
      <input className="renamefoldermodal-input" placeholder={name} />
      <button
        className="renamefoldermodal-changebtn"
        type="submit"
        onClick={onClose}
      >
        변경하기
      </button>
      <button className="renamefoldermodal-closebtn" onClick={onClose}>
        <img src="../../src/assets/close.svg" alt="닫기 아이콘" />
      </button>
    </div>
  );
};

export default RenameFolderModal;
