type NodeType = {
  id: string;
  title: string;
  group: string;
};

type LinkType = {
  source: string; // refers to the id of the source Article
  target: string; // refers to the id of the target Article
};

type Result = {
  pageid: number;
  ns: number;
  title: string;
  snippet: string;
  size: number;
  wordcount: number;
  timestamp: string;
};

type ApiResponse = {
  batchcomplete: string;
  query: {
    search: Result[];
  };
  "*": string;
};
