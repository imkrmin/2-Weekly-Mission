import { formatDate, getTimeAgo } from "../utils/time";
import { useState, MouseEvent, useEffect } from "react";
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
  folder: string;
}

interface CardListProps {
  cardlinks: {
    links?: Link[];
  };
  searchTerm: string;
  selectedFolderName: string;
}

function CardList({
  cardlinks,
  searchTerm,
  selectedFolderName,
}: CardListProps) {
  const transformedData = transCardLinkData(cardlinks);
  const allLinks: Link[] = transformedData.links ?? [];

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [filteredLinks, setFilteredLinks] = useState<Link[]>([]);

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

  const handleSearch = (searchTerm: string) => {
    const filtered = allLinks.filter(
      link =>
        (link.folder === selectedFolderName &&
          link.url.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (link.title &&
          link.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (link.description &&
          link.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    console.log(filtered);

    setFilteredLinks(filtered);
  };

  useEffect(() => {
    setFilteredLinks([]);
    handleSearch(searchTerm);
  }, [searchTerm, selectedFolderName]);

  const linksToDisplay =
    filteredLinks.length > 0 || searchTerm !== "" ? filteredLinks : allLinks;

  return (
    <div className="cardlist-section">
      {linksToDisplay.length > 0 ? (
        <div className="cardlist">
          {linksToDisplay.map(link => (
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
                  />
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
