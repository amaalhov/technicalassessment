import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Article from "./article";
import "../styles/articles-list.css";

const ArticlesList = ({ loading, articles }) => {
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <>
          <Grid className="articles" container spacing={5}>
            {articles.map((article) => (
              <Grid item xs={11} sm={11} lg={7} key={article._id}>
                <Article article={article} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default ArticlesList;
