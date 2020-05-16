import React from 'react';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function CarItem(prop) {
    const start = new Date(prop.start);
    const end = new Date(prop.end);

    return (
            <Link to={`/events/${prop.id}`}>
                <div>
                    <img className="rounded-image" src={prop.url} alt={prop.name + "_img"}/>
                    <Typography variant="body2" color="textSecondary" component="span">
                        <Grid container direction="row" alignItems="center" spacing={1}>
                            <Grid item>
                                {prop.legend}
                            </Grid>
                            <Grid item>
                                <CalendarTodayIcon />
                            </Grid>
                            <Grid item>
                                {start.toLocaleDateString()} to {end.toLocaleDateString()}
                            </Grid>
                        </Grid>
                    </Typography>
                </div>
            </Link>
            );
}

export default CarItem;
