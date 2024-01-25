import { useState, useEffect, useRef } from "react";

const useWikipediaData = (initialSearchTerm = "") => {
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
  const [articleContent, setArticleContent] = useState<any>(null);
  const [searching, setSearching] = useState<Boolean>(false);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      fetchWikipediaData(searchTerm)
        .then((data) => {
          if (data) {
            setArticleContent(data?.extract);
          }
        })
        .catch((error) => {
          console.error("Error fetching Wikipedia data: ", error);
        });
    } else {
      didMount.current = true;
    }
  }, [searching]);

  async function fetchWikipediaData(searchTerm: string) {
    if (!searchTerm) return;

    const apiUrl = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${searchTerm}&prop=extracts|images|links&explaintext=&pllimit=max&imlimit=5`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const pageId = Object.keys(data.query.pages)[0];
      const page = data.query.pages[pageId];

      return {
        extract: page.extract,
        images: page.images?.map((image: any) => image.title),
        links: page.links?.map((link: any) => link.title),
      };
    } catch (error) {
      console.error("Error fetching Wikipedia data:", error);
      return null;
    }
  }

  const handleSearchToggle = () => {
    setSearching((prev) => !prev);
  };

  return { searchTerm, setSearchTerm, articleContent, handleSearchToggle };
};

export default useWikipediaData;
