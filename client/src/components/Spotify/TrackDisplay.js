import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    'display': 'inline-block',
   	padding: '5px',
   	'margin-top': '1.5rem',
   	'margin-bottom': '1.5rem'
  },

});

export default function TrackDisplay( {artistName, albumName, albumUrl, 
	trackName, releaseDate, onButtonSubmit, postAccess } ) {
  
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          width="250"
          image={albumUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Artist:{' '}{artistName}
          </Typography>
           <Typography gutterBottom variant="h5" component="h2">
            Album:{' '}{albumName}
          </Typography>
           <Typography gutterBottom variant="h6" component="h2">
            Track title:{' '}{trackName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Release date:{' '}{releaseDate}
          </Typography>
        </CardContent>
      </CardActionArea>
	      <CardActions>
	        <Button 
	        	size="small" 
	        	color="primary"
	        	disabled={!postAccess}
	        	onClick={onButtonSubmit}
	        	>Add to collection
	        </Button>
	      </CardActions>
    </Card>
  );
}



