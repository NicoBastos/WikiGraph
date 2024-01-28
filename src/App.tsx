import SearchBox from "./components/SearchBox/SearchBox";
import useWikipediaData from "./components/hooks/useWikipediaData";
import GraphCanvas from "./components/MainContent/GraphCanvas";
import ArticleCard from "./components/ArticleCard/ArticleCard";

const App = () => {
  const {
    searchTerm,
    setSearchTerm,
    articleContent,
    handleSearchToggle,
    searching,
    fetchWikipediaData,
    didMount,
  } = useWikipediaData();
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchToggle();
    }
  };
  return (
    <main className="relative h-screen ">
      <GraphCanvas
        searchTerm={searchTerm}
        searching={searching}
        handleSearchToggle={handleSearchToggle}
        fetchWikipediaData={fetchWikipediaData}
        setSearchTerm={setSearchTerm}
      />
      <div className="absolute bottom-0 right-0 h-1/2 w-full md:w-1/3 p-4 md:p-8">
        <ArticleCard
          searchTerm={searchTerm}
          articleContent={articleContent}
          didMount={didMount}
        />
      </div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-96">
        <SearchBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleKeyDown={handleKeyDown}
        />
      </div>
    </main>
  );
};

export default App;
