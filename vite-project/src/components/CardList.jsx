import { formatDate, getTimeAgo } from "../utils/time";
import { useState, useEffect } from "react";
import { transCardLinkData } from "../utils/transCardLinkData";
import KebabModal from "./Modal/KebabModal";
import Modal from "react-modal";
import "../style/CardList.css";

function CardList({ cardLinkData }) {
  const formattedData = transCardLinkData(cardLinkData);
  const links = formattedData.links || [];

  return (
    <div className="cardlist-section">
      {links.length > 0 ? (
        <div className="cardlist">
          {links.map(link => (
            <div key={link.id} className="card-section">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
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
                    <button className="kebab-btn">
                      <img
                        className="kebab-btn-img"
                        src="src/assets/kebab.svg"
                        alt="케밥 버튼"
                      />
                    </button>
                  </div>
                  <p className="card-description">{link.description}</p>
                  <p className="card-createdAt">{formatDate(link.createdAt)}</p>
                </div>
              </a>
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
