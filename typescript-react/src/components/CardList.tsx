import { formatDate, getTimeAgo } from "../utils/time";
import { useState, MouseEvent } from "react";
import { transCardLinkData } from "../utils/transCardLinkData";
import KebabModal from "./Modal/KebabModal";
import "../style/CardList.css";

interface Link {
  id: number;
  createdAt: number;
  url: string;
  title: string;
  description: string;
  imageSource: string | null;
}

interface CardListProps {
  cardlinks: {
    links?: Link[];
  };
}

function CardList({ cardlinks }: CardListProps) {
  const transformedData = transCardLinkData(cardlinks);
  const links: Link[] = transformedData.links ?? [];

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleOpenPopover = (
    event: MouseEvent<HTMLButtonElement, { stopPropagation: () => void }>
  ) => {
    event.stopPropagation();
    setIsPopoverOpen(true);
  };

  const handleClosePopover = () => {
    setIsPopoverOpen(false);
  };

  const handleCardClick = (link: Link) => {
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
                  alt={link.id.toString()}
                />
                <button className="star-btn">
                  <img
                    className="star-btn-img"
                    src="../src/assets/star.svg"
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
                      src="../src/assets/kebab.svg"
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
