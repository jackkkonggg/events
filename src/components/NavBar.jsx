import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar style={{ background: '#2E3B55' }} position="static" color="primary">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit">
                    <Link to="/">
                        <HomeIcon style={{ fill: "white" }}/>
                    </Link>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                </Typography>
                <LocationCityIcon />
                <Button color="inherit">Hong Kong</Button>
            </Toolbar>
        </AppBar>
    </div>
  );
}
