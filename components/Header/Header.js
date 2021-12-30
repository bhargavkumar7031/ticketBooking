import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import headerStyles from './HeaderStyle'
import MenuIcon from '@material-ui/icons/Menu';

import TheatersIcon from '@material-ui/icons/Theaters';
import muiTheme from '../../themes/mui';
import Search from '../Search/Search'
import { ThemeProvider } from '@material-ui/core/styles';



const baseUrl = "https://image.tmdb.org/t/p/original/";
export default function Header() {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
    <ThemeProvider theme={muiTheme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
    edge="start"
    className={classes.menuButton}
    color="inherit"
    aria-label="open drawer"
    >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
             E-C<TheatersIcon className={classes.cubeIcon} />BE
          </Typography>
          <div className={classes.search}>
        
          <Search>
            
          {({value, suggestions, handleChange}) => {
      return (
        <div>
            
            <div className={classes.movieList}>
                    <input type="text" value={value} onChange={handleChange} placeholder={`🔍`}/>
                    {suggestions.map(movie => (
          <section style={{
            width: '310px',
            display: 'flex',
            marginTop: '34px',
            borderBottom: '2px solid grey'
          }}>
          <li>{movie.title} </li>
          <img  style={{
            width: '50px',
            height: '50px'
          }}src={`${baseUrl}${movie.poster_path ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/></section>
        ))}
            </div>
        </div>
        );
    }}
        </Search>
          </div>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
    );
}
