type Article = {
  id: number;
};

type Link = {
  source: number; // refers to the id of the source Article
  target: number; // refers to the id of the target Article
};

type Graph = {
  nodes: Article[];
  links: Link[];
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
