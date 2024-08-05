import { useState, useCallback } from "react";
import { GraphData } from "react-force-graph-3d";
import { v4 as uuidv4 } from "uuid";
const useGraph = (
  initialGraphData: GraphData<NodeType, LinkType>,
  fetchWikipediaData: (searchTerm: string) => Promise<any>,
  searchTerm: string
) => {
  const [data, setData] =
    useState<GraphData<NodeType, LinkType>>(initialGraphData);
  const [requestedTerms, setRequestedTerms] = useState(new Set([searchTerm]));
  const fetchAndAddNodes = async (
    initialNodeId: string,
    initialTerm: string,
    maxNodes: number = 150
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
        if (linkTitles.links) {
          linkTitles = linkTitles.links;
        } else {
          continue;
        }

        const newNodes = [];
        const newLinks = [];

        for (let title of linkTitles) {
          // await sleep(
          //   linkTitles.length / Math.exp(Math.log10(linkTitles.length))
          // );
          if (!requestedTerms.has(title) && localCount < maxNodes) {
            let targetNodeId;

            if (titleToNodeIdMap[title]) {
              // Node already exists, get its ID
              targetNodeId = titleToNodeIdMap[title];
            } else {
              // Create new node with 'group' as the parent node's term
              targetNodeId = uuidv4();
              newNodes.push({ id: targetNodeId, title, group: term }); // Added 'group' field here
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
      // await sleep(75);
    }
  };
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

  return {
    data,
    removeNode,
    addMultipleNodes,
    clearGraph,
    fetchAndAddNodes,
    setRequestedTerms,
  };
};

export default useGraph;
