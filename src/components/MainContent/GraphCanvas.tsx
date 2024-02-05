import { useEffect } from "react";
import ForceGraph3D, { GraphData } from "react-force-graph-3d";
import useGraph from "../hooks/useGraph";

import SpriteText from "three-spritetext";
const GraphCanvas = ({
  searchTerm,
  searching,
  fetchWikipediaData,
  setSearchTerm,
  handleSearchToggle,
}: any) => {
  const initialGraphData: GraphData<NodeType, LinkType> = {
    nodes: [{ id: "0", title: searchTerm, group: searchTerm }],
    links: [],
  };
  const { data, clearGraph, fetchAndAddNodes, setRequestedTerms } = useGraph(
    initialGraphData,
    fetchWikipediaData,
    searchTerm,
  );

  useEffect(() => {
    clearGraph();
    fetchAndAddNodes("0", searchTerm);
  }, [searching]);
  const handleClick = (node: NodeType) => {
    clearGraph();
    setSearchTerm(node.title);
    setRequestedTerms(new Set([]));
    handleSearchToggle();
  };
  return (
    <>
      <ForceGraph3D
        graphData={data}
        onNodeClick={handleClick}
        nodeAutoColorBy="group"
        nodeThreeObject={(node: any) => {
          const sprite = new SpriteText(node.title);
          sprite.color = node.color;
          sprite.textHeight = 8;
          return sprite;
        }}
        width={window.innerWidth} // Adjust graph dimensions as necessary
        height={window.innerHeight}
      />
    </>
  );
};

export default GraphCanvas;
