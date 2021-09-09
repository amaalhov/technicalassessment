import React, { useEffect, useState } from "react";
import ArticlesList from "../components/articles-list";
import Navbar from "../components/navbar";
import axios from "axios";
import instanceAxios from "../config/instance-axios";

const Home = () => {
  let age = "7";
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const [state, setState] = React.useState({
    age: "7",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    age = event.target.value;
  };

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `http://api.nytimes.com/svc/mostpopular/v2/viewed/${age}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
        // `http://api.nytimes.com/svc/mostpopular/v2/viewed/${age}.json?api-key=bvwH80Gwe6YiZJAWJrlMCbQrva82WzpA`
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
