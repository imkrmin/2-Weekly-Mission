import "../../style/RenameFolderMenuModal.css";

function RenameFolderMenuModal({ name, onClose }) {
  return (
    <div className="renamefoldermenumodal-section">
      <div className="renamefoldermenumodal-title">폴더 추가</div>
      <input className="renamefoldermenumodal-input" placeholder={name} />
      <button
        className="renamefoldermenumodal-changebtn"
        type="submit"
        onClick={onClose}
      >
        변경하기
      </button>
      <button className="renamefoldermenumodal-closebtn" onClick={onClose}>
        <img src="../../src/assets/close.svg" />
      </button>
    </div>
  );
}

export default RenameFolderMenuModal;
