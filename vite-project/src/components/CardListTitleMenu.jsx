import "../style/CardListTitleMenu.css";

function CardListTitleMenu({ name }) {
  const isAllFolderButton = name === "전체";

  return (
    <div className="cardlisttitlemenu-section">
      <div className="cardlisttitlemenu-title">{name}</div>
      <div className="cardlisttitlemenu-option">
        {isAllFolderButton ? null : (
          <>
            <button className="cardlisttitlemenu-btn">
              {" "}
              <img
                className="cardlisttitlemenu-btn-icon"
                src="src/assets/share.svg"
                alt="공유 버튼"
              />
              공유
            </button>
            <button className="cardlisttitlemenu-btn">
              {" "}
              <img
                className="cardlisttitlemenu-btn-icon"
                src="src/assets/pen.svg"
                alt="이름 변경 버튼"
              />
              이름변경
            </button>
            <button className="cardlisttitlemenu-btn">
              {" "}
              <img
                className="cardlisttitlemenu-btn-icon"
                src="src/assets/Group 36.svg"
                alt="삭제 버튼"
              />
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CardListTitleMenu;
