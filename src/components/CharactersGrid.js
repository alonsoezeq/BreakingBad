import { Grid } from '@material-ui/core';
import React from 'react';
import CharacterCard from './CharacterCard';

const CharactersGrid = ({characters}) => {

  console.log('Rendering CharactersGrid: ', characters);
  
  return (
    <>
      <Grid container spacing={3}>
      {
        characters.map((character) => (
          <Grid key={character.id} item xs={6} lg={4} m={3}>
            <CharacterCard character={character} />
          </Grid>
        ))
      }
      </Grid>
    </>
  );
};

export default CharactersGrid;