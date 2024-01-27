import { useEffect } from "react";
import ForceGraph3D, { GraphData } from "react-force-graph-3d";
import useGraph from "../../hooks/useGraph";
import ArticleCard from "../ArticleCard/ArticleCard";

const MainContent = () => {
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
  return (
    <>
      {" "}
      <ForceGraph3D
        enableNodeDrag={false}
        onNodeClick={handleClick}
        graphData={data}
      />
    </>
  );
};

export default MainContent;
