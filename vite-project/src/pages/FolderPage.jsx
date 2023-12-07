import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import CardListMenu from "../components/CardListMenu";

function FolderPage() {
  return (
    <>
      <AddLink />
      <SearchBar />
      <CardListMenu />
      <CardList />
    </>
  );
}

export default FolderPage;
