import React from 'react';
import { createContext, useState } from 'react';
import { Box, Container, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CharactersPage from './pages/CharactersPage';
import RandomCharacterPage from './pages/RandomCharacterPage';
import Header from './components/Header';
import Error404Page from './pages/Error404Page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AppContext = createContext();

function App() {
  const [ context, setContext ] = useState({
    title: '',
    searchbox: '',
    loading: false,
    status: null,
    message: null
  });

  const { status, message } = context;

  const handleSnackbarClose = () => {
    setContext({ ...context, status: null, message: null });
  }

  const routes = [
    { path: '/character/random', component: RandomCharacterPage },
    { path: '/', component: CharactersPage },
    { path: '*', component: Error404Page }
  ];

  return (
    <AppContext.Provider value={[ context, setContext ]}>
      <Router>
        <Header />
        <Container fixed>
          <Box my={3} display="flex" justifyContent="center" alignItems="center">
            <Switch>
              {
                routes.map(({path, component}) => (
                  <Route key={path} exact path={path} component={component} />
                ))
              }
            </Switch>
            {
              status &&
              <Snackbar open={!!status} autoHideDuration={5000} onClose={handleSnackbarClose}>
                <Alert severity={status} onClose={handleSnackbarClose}>{message}</Alert>
              </Snackbar>
            }
          </Box>
        </Container>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
