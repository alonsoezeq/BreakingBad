import React from 'react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import CharactersGrid from '../components/CharactersGrid';
import config from '../config/config.json';

const CharactersPage = () => {
  const [ context, setContext ] = useContext(AppContext);
  const [ characters, setCharacters ] = useState([]);
  const { searchbox, loading } = context;

  useEffect(() => {
    setContext({ ...context, loading: true });
    const urlparams = (searchbox.length > 0) ? `?name=${searchbox}` : '';
    axios.get(`${config.API_BASE_URL}/characters${urlparams}`)
         .then((res) => {
          setCharacters(res.data);
          setContext({
            ...context,
            loading: false
          });
         })
         .catch((err) => {
           setContext({
             ...context,
             loading: false,
             status: 'error',
             message: err
           });
         });
  }, [searchbox]);

  return (
    <>
      {
        !loading &&
        <CharactersGrid characters={characters} />
      }
    </>
  );
};

export default CharactersPage;