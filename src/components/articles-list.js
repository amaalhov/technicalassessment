import react from "react";
import Grid from "@material-ui/core/Grid";

const ArticlesList = ({ loading, articels }) => {
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <Grid
          styles={{ backgroundColor: "red", height: "500px" }}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
        ></Grid>
      )}
    </>
  );
};

export default ArticlesList;
