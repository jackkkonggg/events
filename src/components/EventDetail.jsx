import React from 'react';
import { capitalizeFirst } from './Event';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const lorem = {
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lectus feugiat lacus aliquet sodales a a mauris. Nulla arcu enim, suscipit eu elementum quis, vulputate vitae est. Duis pellentesque pretium metus. Nulla quis euismod justo, sit amet porta massa. Integer felis neque, luctus vel molestie vitae, consectetur quis elit. Praesent non massa id risus pellentesque ultricies. Sed ut lacus non augue suscipit accumsan nec et eros. Vestibulum eget eleifend lorem, id tempor mauris. Mauris elit nulla, vulputate non malesuada ut, scelerisque nec lectus. Nulla nisl lectus, eleifend et ex et, ultrices imperdiet justo. Aliquam erat volutpat. Mauris nec bibendum tellus, nec commodo eros. Vivamus eu dapibus turpis.\n Ut laoreet imperdiet tortor, et dapibus tellus. Nullam rhoncus scelerisque purus at ultrices."
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    width: 500,
  },
  cover: {
      height: 400,
    width: 400,
  },
  paper: {
      width: 950,
  }
}));

export default function EventDetail(prop) {
  const classes = useStyles();
  const start = new Date(prop.start);
  const end = new Date(prop.end);

  return (
      <Grid container justify="center">
          <Paper className={classes.paper}>
              <Card className={classes.root}>
                  <CardMedia
                      className={classes.cover}
                      image={prop.url}
                      title={prop.name}
                  />
                  <div className={classes.details + " detail"}>
                      <CardContent className={classes.content}>
                          <Typography component="h5" variant="h5">
                              {capitalizeFirst(prop.name)}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="span">
                              <Grid container direction="row" alignItems="center" spacing={1}>
                                  <Grid item>
                                      <CalendarTodayIcon />
                                  </Grid>
                                  <Grid item>
                                      {start.toLocaleDateString()} to {end.toLocaleDateString()}
                                  </Grid>
                              </Grid>
                          </Typography>
                      </CardContent>
                      <CardContent className={classes.content}>
                          <Typography variant="body2" color="textSecondary">
                              {lorem.para}
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small" color="primary">
                              Share
                          </Button>
                          <Button size="small" color="primary">
                              Join
                          </Button>
                      </CardActions>
                  </div>
              </Card>
          </Paper>
      </Grid>
  );
}
