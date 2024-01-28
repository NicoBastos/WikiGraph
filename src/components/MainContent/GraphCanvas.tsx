import { useEffect, useState } from "react";
import ForceGraph3D, { GraphData } from "react-force-graph-3d";
import useGraph from "../hooks/useGraph";
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
    maxNodes: number = 1000
  ) => {
    let queue = [{ nodeId: initialNodeId, term: initialTerm }];
    let localCount = 0;
    let titleToNodeIdMap = { [initialTerm]: initialNodeId }; // Map titles to node IDs

    while (queue.length > 0 && localCount < maxNodes) {
      const { nodeId, term } = queue.shift() as {
        nodeId: string;
        term: string;
      };

      try {
        let linkTitles = await fetchWikipediaData(term);
        if (linkTitles.links) linkTitles = linkTitles.links;

        const newNodes = [];
        const newLinks = [];

        for (let title of linkTitles) {
          if (!requestedTerms.has(title) && localCount < maxNodes) {
            let targetNodeId;

            if (titleToNodeIdMap[title]) {
              // Node already exists, get its ID
              targetNodeId = titleToNodeIdMap[title];
            } else {
              // Create new node
              targetNodeId = uuidv4();
              newNodes.push({ id: targetNodeId, title });
              titleToNodeIdMap[title] = targetNodeId; // Update map
              queue.push({ nodeId: targetNodeId, term: title });
              localCount++;
            }

            newLinks.push({ source: nodeId, target: targetNodeId });
          }
        }

        setRequestedTerms(
          (prevTerms) => new Set([...prevTerms, ...linkTitles])
        );
        if (newNodes.length > 0) {
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
