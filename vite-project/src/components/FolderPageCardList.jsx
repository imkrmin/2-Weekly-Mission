import { useState, useEffect } from "react";
import { FOLDER_PAGE_API_URL } from "../constants/constant";
import { formatDate, getTimeAgo } from "../utils/time";
import "../style/CardList.css";

function FolderPageCardList() {
  const [cardLinkData, setCardLinkData] = useState({});

  async function getCardLinkData() {
    try {
      const response = await fetch(`${FOLDER_PAGE_API_URL}/users/1/links`);
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
      {cardLinkData?.data?.length === 0 ? (
        <div className="no-links-message">저장된 링크가 없습니다</div>
      ) : (
        <div className="cardlist">
          {cardLinkData?.data?.map(data => (
            <div key={data.id} className="card-section">
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                <div className="card-img-section">
                  <img
                    className="card-img"
                    src={data.image_source ?? "../src/assets/no-image.svg"}
                    alt={data.id}
                  />
                </div>
                <div className="card-info">
                  <p className="card-timeAgo">{getTimeAgo(data.created_at)}</p>
                  <p className="card-description">{data.description}</p>
                  <p className="card-createdAt">
                    {formatDate(data.created_at)}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FolderPageCardList;
