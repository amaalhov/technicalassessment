import React, { useEffect, useState } from "react";
import ArticlesList from "../components/articles-list";
import Navbar from "../components/navbar";
import axios from "axios";
import instanceAxios from "../config/instance-axios";

const Home = () => {
  let numberofarticles = "7";
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await instanceAxios.get(
        `/viewed/${numberofarticles}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
      );
      setArticles(res.data.results);
      setLoading(false);
    };
    getArticles();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <ArticlesList loading={loading} articles={articles} />
      </div>
    </>
  );
};

export default Home;
