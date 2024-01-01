import { useState, useEffect } from "react";
import "../style/CardListTitleMenu.css";
import Modal from "react-modal";
// import ShareFolderMenuModal from "./Modal/ShareFolderMenuModal";
import RenameFolderMenuModal from "./Modal/RenameFolderMenuModal";
import DeleteFolderMenuModal from "./Modal/DeleteFolderMenuModal";

function CardListTitleMenu({ name }) {
  const isAllFolderButton = name === "전체";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleOpenModal = type => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <div className="cardlisttitlemenu-section">
      <div className="cardlisttitlemenu-title">{name}</div>
      <div className="cardlisttitlemenu-option">
        {isAllFolderButton ? null : (
          <>
            <button
              className="cardlisttitlemenu-btn"
              onClick={() => handleOpenModal("share")}
            >
              {" "}
              <img
                className="cardlisttitlemenu-btn-icon"
                src="src/assets/share.svg"
                alt="공유 버튼"
              />
              공유
            </button>
            <button
              className="cardlisttitlemenu-btn"
              onClick={() => handleOpenModal("rename")}
            >
              {" "}
              <img
                className="cardlisttitlemenu-btn-icon"
                src="src/assets/pen.svg"
                alt="이름 변경 버튼"
              />
              이름변경
            </button>
            <button
              className="cardlisttitlemenu-btn"
              onClick={() => handleOpenModal("delete")}
            >
              {" "}
              <img
                className="cardlisttitlemenu-btn-icon"
                src="src/assets/Group 36.svg"
                alt="삭제 버튼"
              />
              삭제
            </button>
          </>
        )}
      </div>
      {/* 
      {isModalOpen && modalType === "share" && (
        <Modal isOpen={isModalOpen}>
          <ShareFolderMenuModal onClose={handleCloseModal} />
        </Modal>
      )} */}
      {isModalOpen && modalType === "rename" && (
        <Modal isOpen={isModalOpen}>
          <RenameFolderMenuModal name={name} onClose={handleCloseModal} />
        </Modal>
      )}
      {isModalOpen && modalType === "delete" && (
        <Modal isOpen={isModalOpen}>
          <DeleteFolderMenuModal name={name} onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
}

export default CardListTitleMenu;
