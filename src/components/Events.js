import React, { Component } from "react";

class Events extends Component {
  state = {
    artistUpcoming: [],
    userUpcoming: []
  };

  componentDidMount() {

    fetch(
			`https://api.songkick.com/api/3.0/users/nhericks/calendar.json?reason=tracked_artist&apikey=WsvDSgM98wiuOncG`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ artistUpcoming: data.resultsPage.results.event });
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
            {this.state.artistUpcoming.map((event, index) => (
              <li key={index}>{event.displayName}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Events;
