import react from "react";
import Grid from "@material-ui/core/Grid";
import Article from "./article";

const ArticlesList = ({ loading, articles }) => {
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div>
          <Grid container spacing={3}>
            {articles.map((article) => (
              <Grid item xs={12} sm={4} key={article._id}>
                <Article article={article} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default ArticlesList;
