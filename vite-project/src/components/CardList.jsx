import { formatDate, getTimeAgo } from "../utils/time";
import "../style/CardList.css";

function CardList({ cardLinkData }) {
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
                <button>
                  <img
                    className="star-btn"
                    src="src/assets/star.svg"
                    alt="별 버튼"
                  ></img>
                </button>
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
