import { useState, useEffect } from "react";
import { API_URL } from "./Const";
import { getTimeAgo } from "./TimeAgo";
import { formatDate } from "./utils.jsx";
import "../style/CardList.css";

function CardList() {
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

  useEffect(() => {
    getCardLinkData();
  }, []);

  return (
    <div className="cardlist-section">
      <div className="cardlist">
        {cardLinkData?.folder?.links.map(link => (
          <div key={link.id} className="card-section">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <div className="card-img-section">
                <img
                  className="card-img"
                  src={link.imageSource ?? "../src/assets/no-image.svg"}
                  alt={link.id}
                />
              </div>
              <div className="card-info">
                <p className="card-timeAgo">{getTimeAgo(link.createdAt)}</p>
                <p className="card-description">{link.description}</p>
                <p className="card-createdAt">{formatDate(link.createdAt)}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;