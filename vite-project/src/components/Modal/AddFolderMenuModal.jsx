import { useState } from "react";
import "../../style/AddFolderMenuModal.css";

function AddFolderMenuModal({ onClose }) {
  return (
    <div className="addfoldermenumodal-section">
      <div className="addfoldermenumodal-title">폴더 추가</div>
      <div className="addfoldermenumodal-input-section">
        <input
          className="addfoldermenumodal-input"
          placeholder="내용을 입력하세요."
        />
      </div>
      <button
        className="addfoldermenumodal-addbtn"
        type="submit"
        onClick={onClose}
      >
        추가하기
      </button>
      <button
        className="addlinkmodal-folder-closebtn-section"
        onClick={onClose}
      >
        <img src="../../src/assets/close.svg" />
      </button>
    </div>
  );
}

export default AddFolderMenuModal;
