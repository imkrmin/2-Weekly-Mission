import "../../style/RenameFolderModal.css";

function RenameFolderModal({ name, onClose }) {
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
        <img src="../../src/assets/close.svg" />
      </button>
    </div>
  );
}

export default RenameFolderModal;
