import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function TrackDisplay( {artistName, albumName, albumUrl, 
	trackName, releaseDate, onButtonSubmit, postAccess} ) {
  


  return (

    <Card className="Display-track" >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Album cover image"
          height="250"
          width="250"
          image={albumUrl}
          title="Track"
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
          <Grid 
            container
            direction="row"
            alignItems= "center"
            justify="center"
                       >
	        <Button 
	        	size="small" 
	        	color="primary"
	        	disabled={!postAccess}
	        	onClick={onButtonSubmit}
	        	>Add to collection
	        </Button>
        </Grid>
	      </CardActions>
    </Card>
  );
}



