import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
   	'display': 'inline-block',
   	margin: '5rem',
   	padding: '3rem',
   	'margin-bottom': '5rem'
  },

});

export default function TrackAnalysis( {danceability, energy, loudness, 
	mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo} ) {
  
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      
        <Typography variant="body2" color="textSecondary" component="p">
        	Danceability:{' '}{danceability}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Energy:{' '}{energy}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Loudness:{' '}{loudness}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Mode:{' '}{mode}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Speechiness:{' '}{speechiness}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Acousticness:{' '}{acousticness}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Instrumentalness:{' '}{instrumentalness}
        </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            Liveness:{' '}{liveness}
        </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            Valence:{' '}{valence}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Tempo:{' '}{tempo}
        </Typography>
       
    </Card>
  );
}



