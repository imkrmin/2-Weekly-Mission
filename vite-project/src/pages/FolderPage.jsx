import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import FolderPageCardList from "../components/FolderPageCardList";
import CardListMenu from "../components/CardListMenu";
import CardListTitle from "../components/CardListTitle";

function FolderPage() {
  return (
    <>
      <AddLink />
      <SearchBar />
      <CardListMenu />
      <CardListTitle />
      <FolderPageCardList />
    </>
  );
}

export default FolderPage;
