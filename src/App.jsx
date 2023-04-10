import "src/index.css";
import NavBar from "components/NavBar";
import Table from "components/User";

const App = () => {
	return (
		<div className="App">
			<header>
				<NavBar/>
			</header>

			<main>
				<Table/>
			</main>
		</div>
	);
};

export default App;