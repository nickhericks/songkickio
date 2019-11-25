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
		// console.log(this.state.userUpcoming);

    return (
      <div className="events-page">
        <div>

					<h1>My Artists</h1>


          <ul className="events">
            {this.state.userUpcoming.map((entry, index) => (
              <li key={index} className="event-details">
                Artist: {entry.reason.trackedArtist[0].displayName}
                <br />
                Event: <a href={entry.event.uri} target="_blank" rel="noopener noreferrer">{entry.event.displayName}</a>
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
