import "../../style/DeleteFolderMenuModal.css";

function DeleteFolderMenuModal({ name, onClose }) {
  return (
    <div className="deletefoldermenumodal-section">
      <div className="deletefoldermenumodal-title">폴더 추가</div>
      <div className="deletefoldermenumodal-foldername">{name}</div>
      <button
        className="deletefoldermenumodal-deletebtn"
        type="submit"
        onClick={onClose}
      >
        삭제하기
      </button>
      <button className="deletefoldermenumodal-closebtn" onClick={onClose}>
        <img src="../../src/assets/close.svg" />
      </button>
    </div>
  );
}

export default DeleteFolderMenuModal;
