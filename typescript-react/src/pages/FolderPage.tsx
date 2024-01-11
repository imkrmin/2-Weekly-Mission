import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import CardListFolderMenu from "../components/CardListFolderMenu";
import CardListTitleMenu from "../components/CardListTitleMenu";
import { useState, useEffect } from "react";
import { FOLDER_PAGE_API_URL } from "../constants/constant";

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

interface Folder {
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: number;
}

interface CardLink {
  folder: Folder;
}

export interface CardLinks {
  [key: string]: CardLink;
}

export interface FoldersData {
  data: Folder[];
}

function FolderPage() {
  const [folders, setFolders] = useState<FoldersData>({ data: [] });
  const [cardlinks, setCardLinks] = useState<CardLinks>({});
  const [selectedFolderName, setSelectedFolderName] = useState<string>("");

  async function getFolderPageMenuData() {
    try {
      const response = await fetch(`${FOLDER_PAGE_API_URL}/1/folders`);
      const folderData: FoldersData = await response.json();
      setFolders(folderData);
    } catch (error) {
      throw new Error("데이터를 가져오는데 실패했습니다.");
    }
  }

  const getSharedPageCardLinkData = async (folderId?: number) => {
    try {
      let apiUrl = `${FOLDER_PAGE_API_URL}/1/links`;

      if (folderId) {
        apiUrl += `?folderId=${folderId}`;
      }

      const response = await fetch(apiUrl);
      const data: CardLinks = await response.json();
      setCardLinks(data);
    } catch (error) {
      throw new Error("링크를 가져오는데 실패했습니다.");
    }
  };

  const handleMenuSelect = async (folderName: string) => {
    const selectedFolder = folders.data.find(
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
      <AddLink folders={folders} />
      <SearchBar />
      <CardListFolderMenu folders={folders} onFolderSelect={handleMenuSelect} />
      <CardListTitleMenu name={selectedFolderName || "전체"} />
      <CardList cardlinks={cardlinks} />
    </>
  );
}

export default FolderPage;
