import React from 'react';
import CarItem from './Carousel';
import Event, { capitalizeFirst } from './Event';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 400,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Home(props) {
    React.useEffect(() => {
        fetchEvents();
    });
    const [events, setEvents] = React.useState([]);
    const fetchEvents = async () => {
        const data = await fetch("https://5eba86b13f97140016992939.mockapi.io/events");
        const items = await data.json();
        setEvents(items);
    }

    const [numToLoad, setNumToLoad] = React.useState(6);
    const dataLength = events.length;
    function loadMore() {
        setNumToLoad(prevValue => {
            return Math.min(prevValue + 6, dataLength);
        })
    }
    const classes = useStyles();

    return (
        <div>
            <div className="carousel middle">
                <h1>Latest Events</h1>
                <Carousel autoplay>
                    {events.slice(0, 5).map((element) => {
                        return (
                            <CarItem
                                id = {element.id}
                                key = {element.id}
                                start = {element.start_at}
                                end = {element.end_at}
                                url = {element.banner_url}
                                legend = {capitalizeFirst(element.name)}
                            />
                        );
                    })}
                </Carousel>
            </div>
            <div className="grid">
                <h1>Featured Events</h1>
                <Grid container className={classes.root}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={4}>
                            {events.slice(0, numToLoad).map((element) => {
                                return (
                                    <Grid key = {element.id} item>
                                        <Event
                                            id = {element.id}
                                            key = {element.id}
                                            created = {element.createdAt}
                                            name = {element.name}
                                            start = {element.start_at}
                                            end = {element.end_at}
                                            url = {element.banner_url}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className="center button">
                <Button variant="contained" onClick={loadMore}>Load More</Button>
            </div>
        </div>
    );
}

export default Home;
