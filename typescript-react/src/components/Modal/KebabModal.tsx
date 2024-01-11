import React from "react";
import "../../style/KebabModal.css";

interface KebabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KebabModal: React.FC<KebabModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="kebab-section">
      <div className="kebab-menu" onClick={onClose}>
        삭제하기
      </div>
      <div className="kebab-menu" onClick={onClose}>
        폴더에 추가
      </div>
    </div>
  );
};

export default KebabModal;
