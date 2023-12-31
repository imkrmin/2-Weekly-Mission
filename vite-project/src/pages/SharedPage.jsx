import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import { useState, useEffect } from "react";
import {
  SHARED_PAGE_API_URL,
  FOLDER_PAGE_API_URL,
} from "../constants/constant";

function SharedPage() {
  const apiUrl =
    window.location.pathname === "/folder"
      ? `${FOLDER_PAGE_API_URL}/1/folders`
      : `${SHARED_PAGE_API_URL}/folder`;

  const [cardLinkData, setCardLinkData] = useState({});

  async function getCardLinkData() {
    try {
      const response = await fetch(apiUrl);
      const linkData = await response.json();
      setCardLinkData(linkData);
    } catch (error) {
      throw new Error("폴더 정보를 가져오는데 실패했습니다.");
    }
  }

  useEffect(() => {
    getCardLinkData();
  }, []);

  return (
    <>
      <Header />
      <SearchBar />
      <CardList cardLinkData={cardLinkData} />
    </>
  );
}

export default SharedPage;
