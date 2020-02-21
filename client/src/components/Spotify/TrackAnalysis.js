import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Acoustic from '../Images/acoustic.png';
import Dance from '../Images/dancing.png';
import Energy from '../Images/energy.png';
import Instrumental from '../Images/instrumental.png';
import Live from '../Images/live.png';
import Loud from '../Images/loud.png';
import Mode from '../Images/mode.png';
import Positive from '../Images/positive.png';
import Speech from '../Images/speech.png';
import Tempo from '../Images/tempo.png';


const useStyles = makeStyles({
  root: {
    'display': 'inline-block',
    'vertical-align': 'top',
    'marginTop': '2rem',
   	'margin': '1rem',
   	'padding': '1rem',
    'border': 'solid black 2px'

  },

});

export default function TrackAnalysis( {danceability, energy, loudness, 
	mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo} ) {
  
  const classes = useStyles();


  return (
  
    <div className={classes.root} >
        <Link style={{
          'fontSize': '1rem',
          'margin': '10px'
        }}
        href="https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/" 
        target="_blank">
            Learn more about track analysis
        </Link>
         
     
        <Grid style={{
          'marginTop': '10px'
        }} 
          container
          direction="row"
          alignItems= "center"
          justify="space-between"
                       >   
            <Typography variant="h6" color="primary" component="p">
                  Danceability:{' '}{danceability}
            </Typography>
             <img src={Dance} 
                  height="25" 
                  width="25"
                  alt="dance img"/>  
        </Grid>

         <Grid 
          container
          direction="row"
          alignItems= "center"
          justify="space-between"
                       >  
            <Typography variant="h6" color="primary" component="p">
                  Energy:{' '}{energy}
            </Typography>
             <img src={Energy} 
                  height="25" 
                  width="25"
                  alt="energy img"/> 
        </Grid>

        <Grid 
          container
          direction="row"
          alignItems= "center"
          justify="space-between"
                       >  
           <Typography variant="h6" color="primary" component="p">
                Loudness:{' '}{loudness}
          </Typography>
            <img src={Loud} 
                height="25" 
                width="25"
                alt="loudness img"/> 
        </Grid>

        <Grid 
          container
          direction="row"
          alignItems= "center"
          justify="space-between"
                       >  
           <Typography variant="h6" color="primary" component="p">
                Mode:{' '}{mode}
          </Typography>
            <img src={Mode} 
                height="25" 
                width="25"
                alt="mode img"/> 
        </Grid>

        <Grid 
          container
          direction="row"
          alignItems= "center"
          justify="space-between"
                       >  
           <Typography variant="h6" color="primary" component="p">
                Speechiness:{' '}{speechiness}
          </Typography>
            <img src={Speech} 
                height="25" 
                width="25"
                alt="speech img"/> 
        </Grid>

        <Grid 
          container
          direction="row"
          alignItems= "center"
          justify="space-between"
                       >  
           <Typography variant="h6" color="primary" component="p">
                Acousticness:{' '}{acousticness}
          </Typography>
            <img src={Acoustic} 
                height="25" 
                width="25"
                alt="acoustic img"/> 
        </Grid>

        <Grid 
          container
          direction="row"
          alignItems= "center"
          justify="space-between"
                       >  
           <Typography variant="h6" color="primary" component="p">
                Instrumentalness:{' '}{instrumentalness}
          </Typography>
             <img src={Instrumental} 
                height="25" 
                width="25"
                alt="instrument img"/> 
        </Grid>

        <Grid 
          container
          direction="row"
          alignItems= "center"
          justify="space-between"
                       >  
           <Typography variant="h6" color="primary" component="p">
                Liveness:{' '}{liveness}
          </Typography>
                 <img src={Live} 
                height="25" 
                width="25"
                alt="liveness img"/> 
        </Grid>
       
        <Grid 
          container
          direction="row"
          alignItems= "center"
          justify="space-between"
                       >  
           <Typography variant="h6" color="primary" component="p">
                Valence:{' '}{valence}
          </Typography>
              <img src={Positive} 
                height="25" 
                width="25"
                alt="valence img"/> 
        </Grid>

        <Grid 
          container
          direction="row"
          alignItems= "center"
          justify="space-between"
                       >  
           <Typography variant="h6" color="primary" component="p">
                Tempo:{' '}{tempo}
          </Typography>
            <img src={Tempo} 
                height="25" 
                width="25"
                alt="tempo img"/> 
        </Grid>
     
    </div>
  );
}



