import "../style/CardListMenu.css";

function CardListMenu() {
  return (
    <div className="cardlistmenu-section">
      <div className="cardlistmenu-btns">
        <button className="cardlistmenu" type="button">
          전체
        </button>
        <button className="cardlistmenu" type="button">
          ⭐ 즐겨찾기
        </button>
        <button className="cardlistmenu" type="button">
          코딩 팁
        </button>
        <button className="cardlistmenu" type="button">
          채용 사이트
        </button>
        <button className="cardlistmenu" type="button">
          유용한 글
        </button>
        <button className="cardlistmenu" type="button">
          나만의 장소
        </button>
      </div>
      <button className="cardlistmenu-addbtn" type="button">
        <img src="src/assets/add.svg" alt="추가버튼" />
      </button>
    </div>
  );
}

export default CardListMenu;
