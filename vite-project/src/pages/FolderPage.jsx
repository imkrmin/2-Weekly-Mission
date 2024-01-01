import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import CardListFolderMenu from "../components/CardListFolderMenu";
import CardListTitleMenu from "../components/CardListTitleMenu";
import { useState, useEffect } from "react";
import { FOLDER_PAGE_API_URL } from "../constants/constant";

function FolderPage() {
  const [cardListMenuData, setCardListMenuData] = useState({});
  const [cardLinkData, setCardLinkData] = useState({});
  const [selectedFolderName, setSelectedFolderName] = useState("");

  async function getFolderPageMenuData() {
    try {
      const response = await fetch(`${FOLDER_PAGE_API_URL}/1/folders`);
      const linkData = await response.json();
      setCardListMenuData(linkData);
    } catch (error) {
      throw new Error("데이터를 가져오는데 실패했습니다.");
    }
  }

  const getSharedPageCardLinkData = async folderId => {
    try {
      let apiUrl = `${FOLDER_PAGE_API_URL}/1/links`;

      if (folderId) {
        apiUrl += `?folderId=${folderId}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      setCardLinkData(data);
    } catch (error) {
      throw new Error("링크를 가져오는데 실패했습니다.");
    }
  };

  const handleMenuSelect = async folderName => {
    const selectedFolder = cardListMenuData.data.find(
      folder => folder.name === folderName
    );

    if (selectedFolder) {
      setSelectedFolderName(folderName);
      getSharedPageCardLinkData(selectedFolder.id);
    } else {
      setSelectedFolderName("");
      getSharedPageCardLinkData();
    }
  };

  useEffect(() => {
    getFolderPageMenuData();
    getSharedPageCardLinkData();
  }, []);

  return (
    <>
      <AddLink cardListMenuData={cardListMenuData} />
      <SearchBar />
      <CardListFolderMenu
        cardListMenuData={cardListMenuData}
        onFolderSelect={handleMenuSelect}
      />
      <CardListTitleMenu name={selectedFolderName || "전체"} />
      <CardList cardLinkData={cardLinkData} />
    </>
  );
}

export default FolderPage;
