import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Grid from '@material-ui/core/Grid';

function capitalizeFirst(str) {
    const arr = str.split(" ");
    let final = "";
    for(let i = 0; i < arr.length; ++i)
        final += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
    return final;
}

const useStyles = makeStyles({
  root: {
    width: 400,
  },
  media: {
    height: 400,
  },
});

export default function Event(prop) {
    const classes = useStyles();
    const nameFirstCap = capitalizeFirst(prop.name);
    const start = new Date(prop.start);
    const end = new Date(prop.end);
    return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={prop.url}
                        title={nameFirstCap}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {nameFirstCap}
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
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Link to={`/events/${prop.id}`}>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Link>

                </CardActions>
            </Card>
                );
}

export { capitalizeFirst };
