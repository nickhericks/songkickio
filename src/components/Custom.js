import React, { Component } from "react";

class Custom extends Component {

	state = {
		artistUpcoming: [],
		userUpcoming: [],
		userUpcomingLocations: []
	}
	

	
	getArtistUpcoming = (query) => {
		fetch(
      `https://api.songkick.com/api/3.0/artists/${query}/calendar.json?apikey=WsvDSgM98wiuOncG`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ artistUpcoming: data.resultsPage.results.event });
      })
      .catch(error => console.log("Error fetching or parsing data", error));
	}
	
	getUserUpcoming = (query) => {
		fetch(
      `https://api.songkick.com/api/3.0/users/${query}/calendar.json?reason=tracked_artist&apikey=WsvDSgM98wiuOncG`
    )
      .then(response => response.json())
      .then(data => {
				this.setState({ userUpcoming: data.resultsPage.results.calendarEntry });
				this.setState({ userUpcomingLocations: data.resultsPage.results.calendarEntry });
      })
      .catch(error => console.log("Error fetching or parsing data", error));
	}
	
	// Must create input fields and capture in this.state
	// Then can use those in custom api queries
	
	// I want to be able to access all my artists events,
	// then view, sort and filter that information.
	
	// TODO: Create an allArtists list of all the artists a user follows.
	// TODO: Use allArtists list to request all those artists events worldwide.
	// TODO: Build a way to view, sort, and filter that list by date or location.



  render() {

		console.log("artistUpcoming", this.state.artistUpcoming);
		console.log("userUpcoming", this.state.userUpcoming);
		console.log("userUpcomingLocations", this.state.userUpcomingLocations);

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
