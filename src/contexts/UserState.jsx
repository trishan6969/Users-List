import { useState } from "react";
import UserContext from "contexts/UserContext";
import PropTypes from "prop-types";

const UserState = ({ children }) => {
	const [ userData, setUserData ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	const API_URL = import.meta.env.VITE_API_URL;

	const getData = async () =>{
		setError(false);
		setLoading(true);
		setUserData(null);

		try{
			const response = await fetch(API_URL);
			const result = await response.json();
			const { results } = result;
			setUserData(results);
			return results;
		}
		catch(error){
			setError(true);
			return error.name;
		}
		finally{
			setLoading(false);
		}
	};

	const states = {
		userData,
		loading,
		error
	};

	const actions = {
		getData
	};

	return (
		<UserContext.Provider value = {{
			states, actions
		}}>
			{children}
		</UserContext.Provider>
	);
};

UserState.propTypes = {
	children: PropTypes.array
};

export default UserState;