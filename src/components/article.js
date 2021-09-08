import React from "react";
import Grid from "@material-ui/core/Grid";

import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DateRangeIcon from "@material-ui/icons/DateRange";
import "../styles/article.css";

const Article = ({ article }) => {
  return (
    <div className="root">
      {article && (
        <div id={article._id}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>
                {article.abstract.substring(0, 50).concat("...")}
              </Typography>
            </Grid>
          </Grid>
        </div>
        // <List id={article._id}>
        //   <ListItem alignItems="flex-start">
        //     <ListItemAvatar>
        //       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        //     </ListItemAvatar>
        //     <ListItemText
        //       primary={article.abstract.substring(0, 50).concat("...")}
        //       secondary={
        //         <React.Fragment>
        //           <Typography
        //             component="span"
        //             variant="body2"
        //             className="inline"
        //             color="textPrimary"
        //           >
        //             {article.byline}
        //           </Typography>
        //           <div>
        //             <DateRangeIcon />
        //             {article.published_date}
        //           </div>
        //         </React.Fragment>
        //       }
        //     />
        //   </ListItem>
        //   <Divider variant="inset" component="li" />
        // </List>
      )}
    </div>
  );
};

export default Article;
