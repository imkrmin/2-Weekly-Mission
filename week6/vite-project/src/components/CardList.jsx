import { useState, useEffect } from "react";
import { API_URL } from "./Const";
import { getTimeAgo } from "./TimeAgo";
import "../style/CardList.css";

function CardList({ onMouseOver, onMouseOut }) {
  const [cardLinkData, setCardLinkData] = useState({});

  async function getCardLinkData() {
    try {
      const response = await fetch(`${API_URL}/folder`);
      const linkData = await response.json();
      setCardLinkData(linkData);
    } catch (error) {
      throw new Error("폴더 정보를 가져오는데 실패했습니다.");
    }
  }

  function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  // function HoverCard() {
  //   const [isHovered, setIsHovered] = useState(false);
  //   const handleMouseOver = () => setIsHovered(true);
  //   const handleMouseLeave = () => setIsHovered(false);

  //   const className = isHovered ? "card card-hovered" : "card";

  //   return (
  //     <div
  //       className={className}
  //       onMouseOver={handleMouseOver}
  //       onMouseLeave={handleMouseLeave}
  //     ></div>
  //   );
  // }

  useEffect(() => {
    getCardLinkData();
  }, []);

  return (
    <div className="cardlist-section">
      <div className="cardlist">
        {cardLinkData?.folder?.links.map(card => (
          <div
            key={card.id}
            className="card"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
          >
            <a href={card.url} target="_blank" rel="noopener noreferrer">
              <img
                className="card-img"
                src={card.imageSource ?? "../src/assets/no-image.svg"}
                alt={card.id}
              />
              <div className="card-info">
                <p className="card-timeAgo">{getTimeAgo(card.createdAt)}</p>
                <p className="card-description">{card.description}</p>
                <p className="card-createdAt">{formatDate(card.createdAt)}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
