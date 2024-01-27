import { useState, useCallback } from "react";
import { GraphData } from "react-force-graph-3d";
const useGraph = (initialGraphData: GraphData<NodeType, LinkType>) => {
  const [data, setData] =
    useState<GraphData<NodeType, LinkType>>(initialGraphData);

  // Function to add a new node and link
  // const addNode = useCallback(() => {
  //   setData(({ nodes, links }: GraphData<NodeType, LinkType>) => {
  //     const newId = nodes.length;
  //     const newIdString = newId.toString();
  //     return {
  //       nodes: [...nodes, { id: newIdString }],
  //       links: [
  //         ...links,
  //         {
  //           source: newIdString,
  //           target: Math.round(Math.random() * (newId - 1)).toString(),
  //         },
  //       ],
  //     };
  //   });
  // }, []);
  const addMultipleNodes = useCallback(
    (newNodes: NodeType[], newLinks: LinkType[]) => {
      setData((data) => {
        const updatedNodes = [...data.nodes, ...newNodes];
        const updatedLinks = [...data.links, ...newLinks];
        return { nodes: updatedNodes, links: updatedLinks };
      });
    },
    []
  );
  // Function to remove a node and its links
  const removeNode = useCallback((nodeId: string) => {
    setData(({ nodes, links }: GraphData<NodeType, LinkType>) => {
      const newLinks = links.filter(
        (l) => l.source !== nodeId && l.target !== nodeId
      );
      const newNodes = nodes.filter((n) => n.id !== nodeId);

      return { nodes: newNodes, links: newLinks };
    });
  }, []);

  const clearGraph = () => {
    setData(initialGraphData);
  };

  return { data, removeNode, addMultipleNodes, clearGraph };
};

export default useGraph;
