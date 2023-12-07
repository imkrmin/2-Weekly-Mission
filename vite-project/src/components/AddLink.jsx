// import { useState, useEffect } from "react";
// import { API_URL } from "./Const";
import "../style/AddLink.css";

function AddLink() {
  // const [folderData, setFolderData] = useState({});

  // async function getUserFolderData() {
  //   try {
  //     const response = await fetch(`${API_URL}/folder`);
  //     const userFolderData = await response.json();
  //     setFolderData(userFolderData);
  //   } catch (error) {
  //     throw new Error("폴더 정보를 가져오는데 실패했습니다.");
  //   }
  // }

  // useEffect(() => {
  //   getUserFolderData();
  // }, []);

  return (
    <div className="addlink-section">
      <input
        className="addlink-input"
        type="search"
        placeholder="링크를 추가해 보세요."
      ></input>
      <button className="addlink-button">추가하기</button>
    </div>
  );
}

export default AddLink;
