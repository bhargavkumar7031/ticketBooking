
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Header from '../Header/Header';
import muiTheme from '../../themes/mui';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const baseUrl = "https://image.tmdb.org/t/p/original/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '50%',
    margin: '30px auto',
    backgroundColor: 'black',
    color: "white"
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    color: "white"
  },
  rating: {
    fontSize: '10px',
    marginLeft: '5px',
    color: "white"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}));

export default function MovieDetails(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const {params} = props.location.state;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
        <Header/>
        <ThemeProvider theme={muiTheme}>
    <Card className={classes.root}>
      <CardHeader
    avatar={
    <React.Fragment>
       
        <Avatar aria-label="recipe" className={classes.avatar}>
            {params.movieDetails.vote_average}
          </Avatar>   
          <sup className={classes.rating}>IMDB</sup>
    </React.Fragment>
    }
    title=  {params.movieDetails.original_title ? params.movieDetails.original_title : params.movieDetails.name}
    subheader={`Release Date : ${params.movieDetails.release_date}`}
    />
      <CardMedia
    className={classes.media}
    image={`${baseUrl}${params.movieDetails.poster_path ? params.movieDetails.poster_path : params.movieDetails.backdrop_path}`}
    title="Paella dish"
    />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
                {params.movieDetails.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button variant="contained" color="primary">
      <Link className={'link'}to=
    {{
      pathname: '/booking',
      state: {
        params: {
          movieDetails: params.movieDetails,
        }
      }
    }}>
                Book  Now </Link>
      </Button>
        <IconButton
    className={clsx(classes.expand, {
      [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
    >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <Typography paragraph>
                  Movie Language : {params.movieDetails.original_language}
          </Typography>
          <Typography paragraph>
                 IMDB popularity : {params.movieDetails.popularity}
          </Typography>
          <Typography paragraph>
                IMDB Rating : {params.movieDetails.vote_average}
          </Typography>
          <Typography>
                IMDB Stars : {params.movieDetails.vote_count}
          </Typography>
        </CardContent>
      
      </Collapse>
    </Card>
    </ThemeProvider>
     </React.Fragment>
    );
}
