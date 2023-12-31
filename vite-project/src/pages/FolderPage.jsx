import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import CardListFolderMenu from "../components/CardListFolderMenu";
import CardListTitleMenu from "../components/CardListTitleMenu";
import { useState, useEffect } from "react";
import {
  SHARED_PAGE_API_URL,
  FOLDER_PAGE_API_URL,
} from "../constants/constant";

function FolderPage() {
  const apiUrl =
    window.location.pathname === "/folder"
      ? `${FOLDER_PAGE_API_URL}/1/folders`
      : `${SHARED_PAGE_API_URL}/folder`;

  const [cardLinkData, setCardLinkData] = useState({});
  const [cardListMenuData, setCardListMenukData] = useState({});
  const [selectedFolderName, setSelectedFolderName] = useState("");

  async function getCardLinkData() {
    try {
      const response = await fetch(apiUrl);
      const linkData = await response.json();
      setCardLinkData(linkData);
      setCardListMenukData(linkData);
    } catch (error) {
      throw new Error("폴더 정보를 가져오는데 실패했습니다.");
    }
  }

  const handleFolderSelect = folderName => {
    setSelectedFolderName(folderName);
  };

  useEffect(() => {
    getCardLinkData();
  }, []);

  return (
    <>
      <AddLink />
      <SearchBar />
      <CardListFolderMenu
        cardListMenuData={cardListMenuData}
        onFolderSelect={handleFolderSelect}
      />
      <CardListTitleMenu name={selectedFolderName || "전체"} />
      <CardList cardLinkData={cardLinkData} />
    </>
  );
}

export default FolderPage;
