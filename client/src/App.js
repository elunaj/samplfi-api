import React from 'react';
import TrackInfo from './components/Spotify/TrackInfo';
import TrackAnalysis from './components/Spotify/TrackAnalysis';
import UserInput from './components/Spotify/UserInput';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import './App.css';

/*
tI = track info - received from search api endpoint 
tA = track analysis - received from search/features api endpoint
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userQuery: "chum", //my query
      artistName: "",
      albumName: "",
      albumImage: [],
      trackId: "",
      trackName: "",
      releaseDate: "",
      trackDanceability: "",
      trackEnergy: "",
      trackKey: "",
      trackLoudness: "",
      trackMode: "",
      trackSpeechiness: "",
      trackAcousticness: "",
      trackInstrumentalness: "",
      trackLiveness: "",
      trackValence: "",
      trackTempo: "",
      trackAnalysisFound: false,
      route: 'signin',
      isSignedIn: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.findTrack();
  }

  handleChange = (event) => {
    this.setState({
      userQuery: event.target.value
    })

    console.log('User query', event.target.value)
  }

  findTrack() {
    fetch('http://localhost:5000/search/' + this.state.userQuery, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return data;
      })
      .then(trackInfo => {
        this.setState({
          artistName: trackInfo.tracks.items[0].artists[0].name,
          albumName: trackInfo.tracks.items[0].album.name,
          albumImage: trackInfo.tracks.items[0].album.images[1],
          trackId: trackInfo.tracks.items[0].id,
          trackName: trackInfo.tracks.items[0].name,
          releaseDate: trackInfo.tracks.items[0].album.release_date
        })
      })
      .catch(err => console.log(err));
  }

  findTrackAnalysis() {
    fetch('http://localhost:5000/search/analysis/' + this.state.trackId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .then(trackAnalysis => {
      this.setState({
        trackDanceability: trackAnalysis.danceability,
        trackEnergy: trackAnalysis.energy,
        trackKey: trackAnalysis.key,
        trackLoudness: trackAnalysis.loudness,
        trackMode: trackAnalysis.mode,
        trackSpeechiness: trackAnalysis.speechiness,
        trackAcousticness: trackAnalysis.acousticness,
        trackInstrumentalness: trackAnalysis.instrumentalness,
        trackLiveness: trackAnalysis.liveness,
        trackValence: trackAnalysis.valence,
        trackTempo: trackAnalysis.tempo,
        trackAnalysisFound: true
      })
    })
    .catch(err => console.log(err));
  }
 
  componentDidMount() {
    
  }

  componentDidUpdate() {
    if (this.state.trackId && !this.state.trackAnalysisFound) {
      this.findTrackAnalysis();
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({
        isSignedIn: false
      })
    } else if (route === 'home') {
      this.setState({
        isSignedIn: true
      })
    }
    this.setState({
      route: route
    })
  }

  render() {
    
    return (
      <div className="App">
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
         { /*<Logo />*/}
        { this.state.route === 'home' 
          ? <div>
              <UserInput
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />

              <TrackInfo 
                artistName={this.state.artistName}
                albumName={this.state.albumName}
                albumImage={this.state.albumImage}
                trackName={this.state.trackName}
                releaseDate={this.state.releaseDate}
              />

              <TrackAnalysis
                danceability={this.state.trackDanceability}
                energy={this.state.trackEnergy}
                key={this.state.trackKey}
                loudness={this.state.trackLoudness}
                mode={this.state.trackMode}
                speechiness={this.state.trackSpeechiness}
                acousticness={this.state.trackAcousticness}
                instrumentalness={this.state.trackInstrumentalness}
                liveness={this.state.trackLiveness}
                valence={this.state.trackValence}
                tempo={this.state.trackTempo}
                 />
            </div>
          : (
            this.state.route === 'signin' 
            ? <Signin onRouteChange={this.onRouteChange}/> 
            : <Register onRouteChange={this.onRouteChange}/> 
            )
        }

      </div>
    );
  }
}

export default App;
