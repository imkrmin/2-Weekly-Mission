import { useState, useEffect } from "react";
import { API_URL } from "./Const";
import { getTimeAgo } from "./TimeAgo";
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

  function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  const cards = cardLinkData?.folder?.links.map(item => (
    <li key={item.id} className="card">
      <img className="card-img" src={item.imageSource} alt={item.id} />
      <div className="card-info">
        <p className="card-timeAgo">{getTimeAgo(item.createdAt)}</p>
        <p className="card-description">{item.description}</p>
        <p className="card-createdAt">{formatDate(item.createdAt)}</p>
      </div>
    </li>
  ));

  useEffect(() => {
    getCardLinkData();
  }, []);

  return (
    <div className="cardlist-section">
      <ul className="cardlist">{cards}</ul>
    </div>
  );
}

export default CardList;
