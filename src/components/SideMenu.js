import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ChevronLeft, Home, Shuffle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../App';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const SideMenu = ({drawerToggle, setDrawer}) => {
  const classes = useStyles();
  const history = useHistory();
  const [context, setContext] = useContext(AppContext);

  const navigateTo = (path, title) => {
    let text = path !== '/' ? title : '';
    setContext({...context, title: text});
    history.push(path);
  }

  const firstGroup = [
    { text: "Inicio", icon: <Home />, path: '/' },
    { text: "Personaje aleatorio", icon: <Shuffle />, path: '/character/random' },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(open); 
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton>
        <ChevronLeft />
      </IconButton>
      <Divider />
      <List>
        {
          firstGroup.map(({text, icon, path}) => (
            <ListItem button key={path} onClick={() => navigateTo(path, text)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))
        }    
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor='left' open={drawerToggle} onClose={toggleDrawer(false)}>
        { list('left') }
      </Drawer>
    </div>
  );
}


export default SideMenu;
