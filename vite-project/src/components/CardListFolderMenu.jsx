import { useState, useEffect } from "react";
import "../style/CardListFolderMenu.css";
import AddFolderModal from "./Modal/AddFolderModal";
import Modal from "react-modal";

function CardListFolderMenu({ folders, onFolderSelect }) {
  const [selectedFolder, setSelectedFolder] = useState("전체");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFolderSelect = folderName => {
    setSelectedFolder(folderName);
    onFolderSelect(folderName);
  };

  const handleAddLink = e => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <div className="cardlistfoldermenu-section">
      <div className="cardlistfoldermenu-btns">
        <button
          className={`cardlistfoldermenu-btn ${
            selectedFolder === "전체" ? "selected" : ""
          }`}
          type="button"
          onClick={() => handleFolderSelect("전체")}
        >
          전체
        </button>
        {folders?.data?.map(folder => (
          <button
            key={folder.id}
            className={`cardlistfoldermenu-btn ${
              selectedFolder === folder.name ? "selected" : ""
            }`}
            type="button"
            onClick={() => handleFolderSelect(folder.name)}
          >
            {folder.name}
          </button>
        ))}
      </div>
      <button
        className="cardlistfoldermenu-addbtn"
        type="button"
        onClick={handleAddLink}
      >
        <img src="src/assets/add.svg" alt="추가버튼" />
        <span className="addbtn-text">폴더 추가</span>
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <AddFolderModal onClose={handleCloseModal} folders={folders} />
        </Modal>
      )}
    </div>
  );
}

export default CardListFolderMenu;
