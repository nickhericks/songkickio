import React, { Component } from "react";

class Custom extends Component {

	state = {
		artistUpcoming: [],
		userUpcoming: []
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
      })
      .catch(error => console.log("Error fetching or parsing data", error));
	}
	
	



  render() {

		console.log(this.state.artistUpcoming);
		console.log(this.state.userUpcoming);

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
              Artist: {entry.reason.trackedArtist[0].displayName}
              <br />
              Venue: {entry.event.venue.displayName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Custom;
