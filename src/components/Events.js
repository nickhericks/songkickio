import React, { Component } from "react";

class Events extends Component {
  state = {
    userUpcoming: []
  };

  componentDidMount() {

    fetch(
			`https://api.songkick.com/api/3.0/users/nhericks/calendar.json?reason=tracked_artist&apikey=WsvDSgM98wiuOncG`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ 
					userUpcoming: data.resultsPage.results.calendarEntry
									
				
				});
      })
      .catch(error => console.log("Error fetching or parsing data", error));





	}

  render() {
    console.log(this.state.artistUpcoming);
		console.log(this.state.userUpcoming);

    return (
      <div className="">
        <div>
          <ul>
            {this.state.userUpcoming.map((entry, index) => (
              <li key={index}>
                Artist: {entry.reason.trackedArtist[0].displayName}
                <br />
                Event: {entry.event.displayName}
                <br />
                URL: {entry.event.uri}
                <br />
                Venue: {entry.event.venue.displayName}
                <br />
                Location: {entry.event.location.city}
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Events;
