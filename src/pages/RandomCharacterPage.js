import React from 'react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import config from '../config/config.json';
import CharacterCard from '../components/CharacterCard';

const RandomCharacterPage = () => {
  const [ context, setContext ] = useContext(AppContext);
  const [ character, setCharacter ] = useState(null);
  const { searchbox, loading } = context;

  useEffect(() => {
    setContext({ ...context, loading: true });
    axios.get(`${config.API_BASE_URL}/character/random`)
         .then((res) => {
          setCharacter(res.data[0]);
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
  }, []);

  return (
    <>
      {
        !loading && character &&
        <CharacterCard character={character} />
      }
    </>
  );
};

export default RandomCharacterPage;