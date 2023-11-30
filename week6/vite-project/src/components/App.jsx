import Nav from "./Nav";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import Footer from "./Footer";
import "../style/App.css";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <div className="main">
        <SearchBar />
        <CardList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
