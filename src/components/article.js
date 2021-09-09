import React from "react";
import Grid from "@material-ui/core/Grid";

// import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import DateRangeIcon from "@material-ui/icons/DateRange";
import "../styles/articles-list.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Article = ({ article }) => {
  return (
    <>
      {article && (
        <div id={article._id}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              {/* <Avatar>{article.byline.substring(3, 4)}</Avatar> */}
              <Avatar src={article.media[0]?.["media-metadata"][0].url} />
            </Grid>
            <Grid item xs>
              <Typography className="abstract">
                {article.abstract.substring(0, 50).concat("...")}
              </Typography>
              <Typography>
                <Grid container>
                  <Grid className="article-by" xs={6} sm={6} md={6}>
                    {article.byline}
                  </Grid>
                  <Grid className="article-date" xs={6} sm={6} md={6}>
                    <DateRangeIcon fontSize="small" />
                    {article.published_date}
                  </Grid>
                </Grid>
              </Typography>
            </Grid>
            <Grid item>
              <ArrowForwardIosIcon style={{ color: "#61646b" }} />
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Article;
