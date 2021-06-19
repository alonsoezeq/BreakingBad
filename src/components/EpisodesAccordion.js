import React from 'react';
import { makeStyles, Accordion, AccordionSummary } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const EpisodesAccordion = ({episodes}) => {
  const classes = useStyles();

  return (
    <>
      {
        episodes.map(({episode_id, title, season, air_date, characters, episode, series}) => (
          <div className={classes.root}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
              >
                
              </AccordionSummary>
            </Accordion>
          </div>
        ))
      }
    </>
  );
};

export default EpisodesAccordion;