import "../../style/ShareFolderModal.css";

function ShareFolderModal({ name, onClose }) {
  return (
    <div className="sharefoldermodal-section">
      <div className="sharefoldermodal-title">폴더 추가</div>
      <div className="sharefoldermodal-foldername">{name}</div>
      <div className="sharefoldermodal-sharelinks-section">
        <button className="sharefoldermodal-sharelink">
          <img src="../../src/assets/kko.svg" alt="카카오톡 아이콘" />
          <span>카카오톡</span>
        </button>
        <button className="sharefoldermodal-sharelink">
          <img src="../../src/assets/facebookshare.svg" alt="페이스북 아이콘" />
          <span>페이스북</span>
        </button>
        <button className="sharefoldermodal-sharelink">
          <img src="../../src/assets/linkcopy.svg" alt="링크복사 아이콘" />
          <span>링크 복사</span>
        </button>
      </div>
      <button className="sharefoldermodal-closebtn" onClick={onClose}>
        <img src="../../src/assets/close.svg" />
      </button>
    </div>
  );
}

export default ShareFolderModal;
