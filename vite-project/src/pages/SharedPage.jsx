import Nav from "../components/Nav";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

function SharedPage() {
  return (
    <>
      <Nav />
      <Header />
      <SearchBar />
      <CardList />
      <Footer />
    </>
  );
}

export default SharedPage;
