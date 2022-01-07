import './App.css';

function App() {
  return (
    <div className="App">
        <p>Hello to Jo, from 🗿</p>
				<h2>Steps to Deploy React to Netlify</h2>
				<ol>
					<li>Run <code>npm i -g create-react-app</code> in your terminal</li>
					<li>In your code folder run <code>create-react-app myprojectname</code></li>
					<li>Run <code>cd myprojectname</code> and <code>npm i</code> to install dependencies</li>
					<li>You can open the project in VSCode with <code>code .</code></li>
					<li>Create a Github Repository</li>
					<li>Follow instructions on the Github Repository to push the project to GitHub (stay in project directory in the command line)</li>
					<li>Sign up at <a href="https://netlify.com">Netlify</a> and in Team Overview, Add New Site &#62; Import from existing project</li>
					<li>Connect to GitHub in Connect to Git provider</li>
					<li>Select your GitHub Repository from the list</li>
					<li>Deploy the site.  Voila! 🎉</li>
				</ol>

				<footer>A website by <a href="https://orangeburrito.com/">OrangeBurrito</a></footer>
    </div>
  );
}

export default App;
