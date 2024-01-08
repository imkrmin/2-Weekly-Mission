import { formatDate, getTimeAgo } from "../utils/time";
import { useState, useRef, useEffect } from "react";
import { transCardLinkData } from "../utils/transCardLinkData";
import KebabModal from "./Modal/KebabModal";
import "../style/CardList.css";

function CardList({ cardlinks }) {
  const formattedData = transCardLinkData(cardlinks);
  const links = formattedData.links || [];

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleOpenPopover = event => {
    event.stopPropagation();

    setIsPopoverOpen(true);
  };

  const handleClosePopover = () => {
    setIsPopoverOpen(false);
  };

  const handleCardClick = link => {
    window.open(link.url, "_blank");
  };

  return (
    <div className="cardlist-section">
      {links.length > 0 ? (
        <div className="cardlist">
          {links.map(link => (
            <div
              key={link.id}
              className="card-section"
              onClick={() => handleCardClick(link)}
            >
              <div className="card-img-section">
                <img
                  className="card-img"
                  src={link.imageSource ?? "../src/assets/no-image.svg"}
                  alt={link.id}
                />
                <button className="star-btn">
                  <img
                    className="star-btn-img"
                    src="src/assets/star.svg"
                    alt="별 버튼"
                  ></img>
                </button>
              </div>
              <div className="card-info">
                <div className="card-kebab-section">
                  <p className="card-timeAgo">{getTimeAgo(link.createdAt)}</p>
                  <button className="kebab-btn" onClick={handleOpenPopover}>
                    <img
                      className="kebab-btn-img"
                      src="src/assets/kebab.svg"
                      alt="케밥 버튼"
                    />
                  </button>
                  <KebabModal
                    isOpen={isPopoverOpen}
                    onClose={handleClosePopover}
                  />
                </div>
                <p className="card-description">{link.description}</p>
                <p className="card-createdAt">{formatDate(link.createdAt)}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-cardlist-message-section">
          <div className="no-cardlist-message">저장된 링크가 없습니다</div>
        </div>
      )}
    </div>
  );
}

export default CardList;
