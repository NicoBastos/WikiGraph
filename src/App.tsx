import SearchBox from "./components/SearchBox/SearchBox";
import useWikipediaData from "./components/hooks/useWikipediaData";
import MainContent from "./components/MainContent/MainContent";
import ArticleCard from "./components/ArticleCard/ArticleCard";

const App = () => {
  const { searchTerm, setSearchTerm, articleContent, handleSearchToggle } =
    useWikipediaData();
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchToggle();
    }
  };
  return (
    <main className="relative h-screen w-screen">
      <MainContent />
      <div className="absolute top-0 left-0 p-4">
        <SearchBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleKeyDown={handleKeyDown}
        />
      </div>
      <div className="absolute top-0 right-0 p-4 h-full w-1/3 flex flex-col justify-center">
        <ArticleCard articleContent={articleContent} />
      </div>
    </main>
  );
};

export default App;
