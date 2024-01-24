import ForceGraph3D from "react-force-graph-3d";

import { useCallback, useEffect, useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const initialGraphData: Graph = {
    nodes: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    links: [
      { source: 0, target: 1 },
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 0 },
      { source: 1, target: 3 },
    ],
  };

  const [data, setData] = useState<Graph>(initialGraphData);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ApiResponse | null>(null);
  useEffect(() => {
    setInterval(() => {
      // Add a new connected node every second
      setData(({ nodes, links }) => {
        const id = nodes.length;
        return {
          nodes: [...nodes, { id }],
          links: [
            ...links,
            { source: id, target: Math.round(Math.random() * (id - 1)) },
          ],
        };
      });
    }, 10000);
  }, []);

  const handleClick = useCallback(
    (node: { id: number }) => {
      const { nodes, links } = data;

      // Remove node on click
      const newLinks = links.filter(
        (l) => l.source !== node.id && l.target !== node.id
      ); // Remove links attached to node
      const newnodes = nodes.slice();
      newnodes.splice(node.id, 1); // Remove node
      newnodes.forEach((n, idx) => {
        n.id = idx;
      }); // Reset node ids to array index

      setData({ nodes: newnodes, links: newLinks });
    },
    [data, setData]
  );
  async function handleSearch() {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=parse&page=${searchTerm}&format=json`
    );
    let data = await response.json();
    data = data.parse.text;
    console.log("response: ", data.parse);
    // const parsedData = await parseMarkup(data);
    setResults(data);
  }
  async function parseMarkup(markup: Response) {
    const response = await fetch(
      `https://your-wikimedia-project.org/w/api.php`,
      {
        method: "POST",
        body: JSON.stringify({
          action: "parse",
          text: markup,
          contentmodel: "wikitext",
          format: "json",
          origin: "*",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data.parse.text["*"];
  }
  return (
    <main className="">
      {/* <ForceGraph3D
        enableNodeDrag={false}
        onNodeClick={handleClick}
        graphData={data}
      /> */}
      {/* <SearchBox /> */}
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {results && results["*"] && (
          <div dangerouslySetInnerHTML={{ __html: results["*"] }}></div>
        )}
      </div>
    </main>
  );
}

export default App;
