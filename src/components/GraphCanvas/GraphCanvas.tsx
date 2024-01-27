import { useEffect, useState } from "react";
import ForceGraph3D, { GraphData } from "react-force-graph-3d";
import useGraph from "../../hooks/useGraph";
import { v4 as uuidv4 } from "uuid";

const GraphCanvas = ({
  searchTerm,
  searching,
  fetchWikipediaData,
  setSearchTerm,
  handleSearchToggle,
}: any) => {
  const [requestedTerms, setRequestedTerms] = useState(new Set([searchTerm]));

  const initialGraphData: GraphData<NodeType, LinkType> = {
    nodes: [{ id: "0", title: searchTerm }],
    links: [],
  };
  const { data, addMultipleNodes, clearGraph } = useGraph(initialGraphData);

  const fetchAndAddNodes = async (
    initialNodeId: string,
    initialTerm: string,
    maxNodes: number = 200
  ) => {
    let queue = [{ nodeId: initialNodeId, term: initialTerm }];
    let localCount = 0;

    while (queue.length > 0 && localCount < maxNodes) {
      const { nodeId, term } = queue.shift() as {
        nodeId: string;
        term: string;
      };

      try {
        let linkTitles = await fetchWikipediaData(term);
        if (linkTitles.links) linkTitles = linkTitles.links;

        const newNodes: NodeType[] = [];
        const newLinks = [];

        for (let title of linkTitles) {
          if (!requestedTerms.has(title) && localCount < maxNodes) {
            const newNodeId = uuidv4();
            newNodes.push({ id: newNodeId, title });
            newLinks.push({ source: nodeId, target: newNodeId });
            queue.push({ nodeId: newNodeId, term: title });
            localCount++;
          }
        }

        setRequestedTerms((prevTerms) => {
          const newTerms = new Set(prevTerms);
          newNodes.forEach((node) => {
            if (node) {
              newTerms.add(node.title);
            }
          });
          return newTerms;
        });
        if (newNodes != null) {
          addMultipleNodes(newNodes, newLinks);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    console.log("Graphcanvas useeffect!");
    clearGraph();
    fetchAndAddNodes("0", searchTerm);
  }, [searching]);
  const handleClick = (node: NodeType) => {
    console.log("must be here");
    // removeNode(node.id);
    setSearchTerm(node.title);
    setRequestedTerms(new Set([]));
    handleSearchToggle();
  };
  return (
    <>
      <ForceGraph3D
        enableNodeDrag={false}
        onNodeClick={handleClick}
        graphData={data}
        nodeLabel={(node) => node.title}
        // onNodeHover={}
      />
    </>
  );
};

export default GraphCanvas;
