import { useState, useEffect, useRef } from "react";

const useWikipediaData = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
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
    const url = `https://wikigraph-server-8042906eb85c.herokuapp.com/getWikiArticle?${params.toString()}`;

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

  async function fetchWikipediaLinks(searchTerm: string) {
    if (!searchTerm) return;

    const params = new URLSearchParams({
      searchTerm: searchTerm,
    });
    const url = `https://wikigraph-server-8042906eb85c.herokuapp.com/getWikiArticle?${params.toString()}`;

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
    didMount,
  };
};

export default useWikipediaData;
