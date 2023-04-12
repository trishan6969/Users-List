import { useState } from "react";
import UserContext from "contexts/UserContext";
import PropTypes from "prop-types";

const NUMBERS = {
	zero: 0,
	one: 1
};

const SORT_FORMAT = {
	asc: "ascending",
	desc: "descending"
};

const UserState = ({ children }) => {
	const [ rawData, setRawData ] = useState([]);
	const [ userData, setUserData ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);
	const [ searchError, setSearchError ] = useState(false);

	const API_URL = import.meta.env.VITE_API_URL;

	const getData = async () => {
		setSearchError(false);
		setError(false);
		setLoading(true);
		setUserData(null);

		try {
			const response = await fetch(API_URL);
			const result = await response.json();
			const { results } = result;
			setRawData(results);
			setUserData(results);
			return results;
		}
		catch (error) {
			setError(true);
			return error.name;
		}
		finally {
			setLoading(false);
		}
	};

	const searchUser = (inputValue) => {
		setSearchError(false);
		const filterUser = rawData.filter((user) => {
			const { name } = user;
			return name.first.toLowerCase().startsWith(inputValue);
		});
		setUserData(filterUser);

		if (filterUser.length === NUMBERS.zero) {
			setSearchError(true);
		}
	};

	const sortUser = (format) => {
		const sortedData = [...userData];
		if (format === SORT_FORMAT.asc) {
			const ascData = sortedData.sort((a, b) => {
				return a.name.first.localeCompare(b.name.first);
			});
			setUserData(ascData);
		}
		else if(format === SORT_FORMAT.desc) {
			const descData = sortedData.sort((a, b) => {
				return b.name.first.localeCompare(a.name.first);
			});
			setUserData(descData);
		}
		else{
			setUserData(rawData);
		}
	};

	const states = {
		userData,
		loading,
		error,
		searchError
	};

	const actions = {
		getData,
		searchUser,
		sortUser
	};

	return (
		<UserContext.Provider value={{
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