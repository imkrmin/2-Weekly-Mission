import React from "react";
import "../../style/DeleteFolderModal.css";

interface DeleteFolderModalProps {
  name: string;
  onClose: () => void;
}

const DeleteFolderModal: React.FC<DeleteFolderModalProps> = ({
  name,
  onClose,
}) => {
  return (
    <div className="deletefoldermodal-section">
      <div className="deletefoldermodal-title">폴더 공유</div>
      <div className="deletefoldermodal-foldername">{name}</div>
      <button
        className="deletefoldermodal-deletebtn"
        type="submit"
        onClick={onClose}
      >
        삭제하기
      </button>
      <button className="deletefoldermodal-closebtn" onClick={onClose}>
        <img src="../../src/assets/close.svg" alt="닫기 아이콘" />
      </button>
    </div>
  );
};

export default DeleteFolderModal;
