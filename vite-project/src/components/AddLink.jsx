import { useState, useEffect } from "react";
import "../style/AddLink.css";
import AddLinkModal from "./Modal/AddLinkModal";
import Modal from "react-modal";

function AddLink({ cardListMenuData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <form className="addlink-section">
        <div className="addlink">
          <input
            className="addlink-input"
            type="search"
            placeholder="링크를 추가해 보세요."
          />
          <button className="addlink-button" onClick={handleAddLink}>
            추가하기
          </button>
        </div>
      </form>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <AddLinkModal
            onClose={handleCloseModal}
            cardListMenuData={cardListMenuData}
          />
        </Modal>
      )}
    </>
  );
}

export default AddLink;
