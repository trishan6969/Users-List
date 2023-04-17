import "src/index.css";
import NavBar from "components/NavBar";
import UserTable from "components/User";
import UserProvider from "contexts/User";

const App = () => {
	return (
		<div className="App">
			<header>
				<NavBar/>
			</header>

			<UserProvider>
				<main>
					<UserTable/>
				</main>
			</UserProvider>
		</div>
	);
};

export default App;