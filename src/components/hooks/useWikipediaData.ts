import { useState, useEffect, useRef } from "react";

const useWikipediaData = () => {
  const [searchTerm, setSearchTerm] = useState<string>("Dollar");
  const [articleContent, setArticleContent] = useState<string>("");
  const [searching, setSearching] = useState<Boolean>(false);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      fetchWikipediaData(searchTerm)
        .then((data: { extract: string }) => {
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

    const params = new URLSearchParams({
      searchTerm: searchTerm,
    });
    const url = `http://localhost:3000/getWikiArticle?${params.toString()}`;

    try {
      return fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.error("Error fetching Wikipedia data:", error);
      return null;
    }
  }

  const handleSearchToggle = () => {
    console.log(searching);
    setSearching((prev) => !prev);
  };

  return {
    searchTerm,
    setSearchTerm,
    articleContent,
    handleSearchToggle,
    searching,
    fetchWikipediaData,
  };
};

export default useWikipediaData;
