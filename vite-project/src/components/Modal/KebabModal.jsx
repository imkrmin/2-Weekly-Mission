import "../../style/KebabModal.css";
import Modal from "react-modal";

function KebabModal({ onCloseModal }) {
  return (
    <Modal>
      <div className="kebab-section">
        <div className="kebab-menu" onClick={onCloseModal}>
          삭제하기
        </div>
        <div className="kebab-menu" onClick={onCloseModal}>
          폴더에 추가
        </div>
      </div>
    </Modal>
  );
}

export default KebabModal;
