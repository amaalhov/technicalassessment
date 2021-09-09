import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import DateRangeIcon from "@material-ui/icons/DateRange";
import "../styles/articles-list.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

const Article = ({ article }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {article && (
        <div id={article._id} onClick={handleClickOpen}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar src={article.media[0]?.["media-metadata"][0].url} />
            </Grid>
            <Grid item xs>
              <Typography className="abstract">
                {article.abstract.substring(0, 50).concat("...")}
              </Typography>
              <Typography>
                <Grid container>
                  <Grid className="article-by" xs={8} sm={6} md={6}>
                    {article.byline}
                  </Grid>
                  <Grid className="article-date" xs={4} sm={6} md={6}>
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

          <Dialog
            aria-labelledby="customized-dialog-title"
            open={open}
            onClose={handleClose}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              {article.title}
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>{article.abstract}</Typography>

              <Typography gutterBottom>
                Full Story here...{" "}
                <a href={article.url} target="_blank">
                  {article.url}
                </a>
              </Typography>
              <Typography gutterBottom>
                Tags
                <Chip label={article.section} />
                {article.subsection === "" ? (
                  ""
                ) : (
                  <Chip label={article.subsection} />
                )}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Exit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default Article;
