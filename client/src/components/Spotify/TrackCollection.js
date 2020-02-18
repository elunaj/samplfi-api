import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './TrackCollection.css';

export default class TrackCollection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fetchStatus: this.props.fetchStatus,
			userTracksCollection: [...this.props.userTracksCollection]

		}
	}

	componentDidMount() {
		console.log('tc', this.props.fetchStatus)
		console.log('tc', [...this.state.userTracksCollection])
	}

	componentDidUpdate() {
		console.log(this.state.userTracksCollection)
	}

	render() {

		return (
			<div>
				{this.state.fetchStatus 

					?	(this.state.userTracksCollection.map( (track, i) => {
					 			return (
					 				<Card className="tc" key={i}>
						 				<CardActions>
										        <Button 
										        	size="small" 
										        	color="primary"
										
										        	>Remove
										        </Button>
										      </CardActions>
									      <CardActionArea>
								        <CardMedia
								          component="img"
								          alt="Contemplative Reptile"
								          height="100"
								          width="100"
								          image={track.album_cover_url}
								          title="Contemplative Reptile"
								        />
								        <CardContent>
								          <Typography gutterBottom variant="h5" component="h2">
								            Artist:{' '}{track.artist_name}
								          </Typography>
								           <Typography gutterBottom variant="h6" component="h3">
								            Track title:{' '}{track.track_title}
								          </Typography>
								            <Typography variant="body2" color="textSecondary" component="p">
								            Album:{' '}{track.album_name}
								          </Typography>
								        
								        </CardContent>
								      </CardActionArea>
								    </Card>
					 			)
					 		})
					 	)

				 	: null }
			 	
			</div>
		);
	}
}


