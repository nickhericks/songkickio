import React, { Component } from "react";

class Custom extends Component {
  state = {
		trackedArtists: [],
		trackedArtistEvents: [],
    artistUpcoming: [],
    userUpcoming: [],
    userUpcomingLocations: []
  };

  getArtistUpcoming = query => {
    fetch(
      `https://api.songkick.com/api/3.0/artists/${query}/calendar.json?apikey=WsvDSgM98wiuOncG`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ artistUpcoming: data.resultsPage.results.event });
      })
      .catch(error => console.log("Error fetching or parsing data", error));
  };

  getUserUpcoming = query => {
    fetch(
      `https://api.songkick.com/api/3.0/users/${query}/calendar.json?reason=tracked_artist&apikey=WsvDSgM98wiuOncG`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ userUpcoming: data.resultsPage.results.calendarEntry });
        this.setState({
          userUpcomingLocations: data.resultsPage.results.calendarEntry
        });
      })
      .catch(error => console.log("Error fetching or parsing data", error));
  };

  // Must create input fields and capture in this.state
  // Then can use those in custom api queries

  // I want to be able to access all my artists events,
  // then view, sort and filter that information.

  // TODO: Create user field and add to this.state
  // TODO: If no user is entered, create list of all artists on Songkick.
  // TODO: Create a selectedArtists list of all the artists a user follows.
  // TODO: Use selectedArtists list to request all those artists events.
  // TODO: Build a way to view, sort, and filter that list by date or location.

  // Get all user's tracked artists
  getTrackedArtists = query => {
    fetch(
      `https://api.songkick.com/api/3.0/users/${query}/artists/tracked.json?apikey=WsvDSgM98wiuOncG&per_page=all`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ trackedArtists: data.resultsPage.results.artist });
      })
      .catch(error => console.log("Error fetching or parsing data", error));
	};
	
	// Get all events for user's tracked artists
	getTrackedArtistEvents = query => {

		// TODO: Need to finish writing this. It needs to loop through this.state.trackedArtists and pull out the event info that I want to collect.
		// TODO: Note that I don't think we can avoid the limit of 50 per page so maybe solve that by noting how many totalEntries there are then looping through the request made to get the next "page" number page=${next page number} see API docs for how to access 'totalEntries' and 'page'


    fetch(
      `https://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey=WsvDSgM98wiuOncG`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ trackedArtists: data.resultsPage.results.artist });
      })
      .catch(error => console.log("Error fetching or parsing data", error));
	};



	componentDidMount() {
		this.getTrackedArtists("nhericks");
		this.getTrackedArtistEvents("nhericks");
	}



  render() {
    console.log("artistUpcoming", this.state.artistUpcoming);
    console.log("userUpcoming", this.state.userUpcoming);
    console.log("userUpcomingLocations", this.state.userUpcomingLocations);
    console.log("trackedArtists", this.state.trackedArtists);
    console.log("trackedArtistEvents", this.state.trackedArtistEvents);


    return (
      <div className="">
        <div>
          <button onClick={() => this.getArtistUpcoming("7637139")}>
            Susto upcoming
          </button>
          <ul>
            {this.state.artistUpcoming.map((event, index) => (
              <li key={index}>{event.displayName}</li>
            ))}
          </ul>
        </div>

        <div>
          <button onClick={() => this.getUserUpcoming("nhericks")}>
            Nick upcoming
          </button>
        </div>
        <ul>
          {this.state.userUpcoming.map((entry, index) => (
            <li key={index}>
              <strong>Artist:</strong>{" "}
              {entry.reason.trackedArtist[0].displayName}{" "}
              <strong>Venue:</strong>
              {entry.event.venue.displayName}
            </li>
          ))}
        </ul>
        <h2>Locations</h2>
        <ul>
          {this.state.userUpcoming.map((entry, index) => (
            <li key={index}>
              <strong>Location:</strong>
              {entry.event.location.city}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Custom;
