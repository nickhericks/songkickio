# Songkickio

Explore possibilities of the Songkick API.

---



<!-- ## View project
:mag: Live version available at [https://techdegree-project-7.netlify.com](https://techdegree-project-7.netlify.com) -->

<br><br>

<!-- <img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1557551236/portfolio/react-gallery.png" width="899px"> -->

<!-- 1. Download this repo.
2. Navigate to the project directory in the command line/terminal.
3. Run 'npm install' (or view the required dependencies listed in the package.json file and install each manually).
4. Create an account with Flickr and apply for a non-commercial API key.
5. Create a config.js file in the project's src folder.
6. In the config file add:
```javascript
const apiKey = 'YOUR API KEY';
export default apiKey;
```
7. Run 'npm start' to view the project in your browser at:  localhost:3000 -->

<!-- ## Project objective

In this project, JSX is used to write markup-like syntax directly in the JS files and managing state in a container component that passes data down to reusable stateless components. Additionally, supportive tools are used in this React project like the Create React App and React Router modules. -->

<!-- ## Techniques and concepts

- create-react-app
- JSX
- React Router
- Fetch API
- Flickr API -->

<!-- ## Additional features

In addition to completing the basic requirements for this techdegree project, I also added additional features including:

- [x] Displaying a loading indicator each time the app fetches new data.
- [x] Displaying a friendly user message when no matches are found by search
- [x] Display a 404 error component when a URL does not match an existing route
- [x] Personalized CSS stylings -->

<!-- ## Code example

From the Search.js component, this function is executed when the form (search box) is submitted.

```javascript
// When form is submitted
handleSubmit = (e) => {
	e.preventDefault();
	let searchQuery = this.search.value;
	// Pass search query to performSearch function in App.js
	this.props.newSearch(searchQuery);
	e.currentTarget.reset();
	let path = `/search/${searchQuery}`;
	// Push new entry onto history stack (list of previously visited URLs)
	// which allows us to programmatically change the URL
	this.props.history.push(path);
};
``` -->

## Acknowledgements

Many thanks to [Songkick](https://www.songkick.com) for use of their API. 🎵

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). :raised_hands:

