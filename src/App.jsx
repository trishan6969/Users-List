import "src/index.css";
import NavBar from "components/NavBar";
import Table from "components/User";
import UserState from "contexts/UserState";

const App = () => {
	return (
		<div className="App">
			<UserState>
				<header>
					<NavBar/>
				</header>

				<main>
					<Table/>
				</main>
			</UserState>
		</div>
	);
};

export default App;