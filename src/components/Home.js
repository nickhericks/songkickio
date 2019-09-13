import React, { Component } from "react";

class Home extends Component {

	state = {
		music: []
	}
	

	componentDidMount() {
		fetch(
      "https://api.songkick.com/api/3.0/artists/395944/gigography.json?apikey=WsvDSgM98wiuOncG"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ music: data.resultsPage.results.event });
      })
      .catch(error => console.log("Error fetching or parsing data", error));
	}
	



  render() {

		console.log(this.state.music);

    return (
			<div className=''>

				<button>Request gigography</button>

				{this.state.music.map( (item, index) => (
					<div>

						{item.displayName}

					</div>
				))}




				
			</div>
		)
  }
}

export default Home;
