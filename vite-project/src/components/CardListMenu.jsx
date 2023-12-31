import "../style/CardListMenu.css";
import { useState, useEffect } from "react";
import { FOLDER_PAGE_API_URL } from "../constants/constant";

function CardListMenu() {
  const [cardListMenuData, setCardListMenukData] = useState({});

  async function getCardListMenuData() {
    try {
      const response = await fetch(`${FOLDER_PAGE_API_URL}/users/1/folders`);
      const linkData = await response.json();
      setCardListMenukData(linkData);
    } catch (error) {
      throw new Error("폴더 정보를 가져오는데 실패했습니다.");
    }
  }

  useEffect(() => {
    getCardListMenuData();
  }, []);

  return (
    <div className="cardlistmenu-section">
      <div className="cardlistmenu-btns">
        <button className="cardlistmenu" type="button">
          전체
        </button>
        {cardListMenuData?.data?.map(folder => (
          <button key={folder.id} className="cardlistmenu" type="button">
            {folder.name}
          </button>
        ))}
      </div>
      <button className="cardlistmenu-addbtn" type="button">
        <img src="src/assets/add.svg" alt="추가버튼" />
      </button>
    </div>
  );
}

export default CardListMenu;
