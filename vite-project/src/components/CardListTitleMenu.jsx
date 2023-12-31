import "../style/CardListTitleMenu.css";

function CardListTitleMenu({ name }) {
  return (
    <div className="cardlisttitle-section">
      <div className="cardlisttitle">{name}</div>
      <div className="cardlisttitle-option">
        <button className="cardlisttitle-btn">
          {" "}
          <img
            className="cardlisttitle-btn-icon"
            src="src/assets/share.svg"
            alt="공유 버튼"
          />
          공유
        </button>
        <button className="cardlisttitle-btn">
          {" "}
          <img
            className="cardlisttitle-btn-icon"
            src="src/assets/pen.svg"
            alt="이름 변경 버튼"
          />
          이름변경
        </button>
        <button className="cardlisttitle-btn">
          {" "}
          <img
            className="cardlisttitle-btn-icon"
            src="src/assets/Group 36.svg"
            alt="삭제 버튼"
          />
          삭제
        </button>
      </div>
    </div>
  );
}

export default CardListTitleMenu;
