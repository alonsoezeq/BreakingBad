import React, { useContext, useState } from 'react';
import { makeStyles, AppBar, IconButton, InputBase, LinearProgress, Toolbar, Typography, fade } from '@material-ui/core';
import { Menu, Search } from '@material-ui/icons';
import SideMenu from './SideMenu';
import { AppContext } from '../App';

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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const classes= useStyles();
  const [ search, setSearch ] = useState('');
  const [ drawerToggle, setDrawer ] = useState(false);
  const [ context, setContext ] = useContext(AppContext);
  const { title, loading } = context;

  const handleSearchBoxChange = (event) => {
    setSearch(encodeURIComponent(event.target.value.trim()));
  }

  const handleSearchBoxKeyDown = (event) => {
    if (event.key === 'Enter') {
      setContext({
        ...context,
        searchbox: search
      });
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menú" onClick={() => setDrawer(!drawerToggle)}>
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Breaking Bad
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {
            title === '' &&
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                value={search}
                onChange={handleSearchBoxChange}
                onKeyPress={handleSearchBoxKeyDown}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          }
        </Toolbar>
        { loading && <LinearProgress /> }
      </AppBar>
      <SideMenu drawerToggle={drawerToggle} setDrawer={setDrawer} />
    </div>
  );
}

export default Header;
