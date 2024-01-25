import ArticleCard from "./components/ArticleCard/ArticleCard";
import ForceGraph3D, { GraphData } from "react-force-graph-3d";
import { useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import useWikipediaData from "./components/hooks/useWikipediaData";
import useGraph from "./components/hooks/useGraph";

function App() {
  const initialGraphData: GraphData<NodeType, LinkType> = {
    nodes: [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }],
    links: [
      { source: "0", target: "1" },
      { source: "1", target: "2" },
      { source: "2", target: "3" },
      { source: "3", target: "4" },
      { source: "4", target: "0" },
      { source: "1", target: "3" },
    ],
  };

  const { data, addNode, removeNode } = useGraph(initialGraphData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      addNode();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [addNode]);

  const handleClick = (node: NodeType) => {
    removeNode(node.id);
  };

  const { searchTerm, setSearchTerm, articleContent, handleSearchToggle } =
    useWikipediaData();

  return (
    <main className="flex h-screen bg-gray-100">
      <div className="flex-1 p-4">
        <ForceGraph3D
          enableNodeDrag={false}
          onNodeClick={handleClick}
          graphData={data}
        />
        <SearchBox />
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded shadow-sm text-black"
        />
        <button
          onClick={handleSearchToggle}
          className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <ArticleCard articleContent={articleContent} />
    </main>
  );
}

export default App;
