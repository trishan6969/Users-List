import { useState, useRef } from "react";
import Context from "contexts/User/Context";
import PropTypes from "prop-types";

const SORT_FORMAT = {
	asc: "ascending",
	desc: "descending"
};

const API_URL = import.meta.env.VITE_API_URL;

const Provider = ({ children }) => {
	const [ rawData, setRawData ] = useState([]);
	const [ userData, setUserData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ hasError, setHasError ] = useState(false);
	const [ hasSearchError, setHasSearchError ] = useState(false);

	const searchBar = useRef();
	const sortOption = useRef();

	const getData = async () => {
		setHasSearchError(false);
		setHasError(false);
		setIsLoading(true);
		setUserData(null);

		try {
			const response = await fetch(API_URL);
			const result = await response.json();
			const { results } = result;
			setRawData(results);
			setUserData(results);
			return results;
		}
		catch (hasError) {
			setHasError(true);
			return hasError.name;
		}
		finally {
			setIsLoading(false);
		}
	};

	const searchUser = (inputValue) => {
		setHasSearchError(false);
		const filterUser = rawData.filter((user) => {
			const { name } = user;
			return name.first.toLowerCase().startsWith(inputValue);
		});
		if (filterUser.length === 0) {
			setHasSearchError(true);
		}
		setUserData(filterUser);
		return filterUser;
	};

	const sortUser = (format) => {
		const sortedData = [...userData];
		if (format === SORT_FORMAT.asc) {
			const ascData = sortedData.sort((a, b) => {
				return a.name.first.localeCompare(b.name.first);
			});
			setUserData(ascData);
			return ascData;
		}
		else if(format === SORT_FORMAT.desc) {
			const descData = sortedData.sort((a, b) => {
				return b.name.first.localeCompare(a.name.first);
			});
			setUserData(descData);
			return descData;
		}
		else{
			setUserData(rawData);
			return rawData;
		}
	};

	const states = {
		userData,
		isLoading,
		hasError,
		hasSearchError
	};

	const refs = {
		searchBar,
		sortOption
	};

	const actions = {
		getData,
		searchUser,
		sortUser
	};

	return (
		<Context.Provider value={{
			states, actions, refs
		}}>
			{children}
		</Context.Provider>
	);
};

Provider.propTypes = {
	children: PropTypes.object
};

export default Provider;