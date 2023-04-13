import { useCallback, useRef, useContext } from "react";
import UserContext from "contexts/UserContext";

const Search = () => {
	const context = useContext(UserContext);
	const { actions } = context;
	const searchBar = useRef();

	const clearInput = useCallback(() =>{
		searchBar.current.value = "";
		actions.searchUser(searchBar.current.value);
		return searchBar.current.value;
	});

	const handleSearch = useCallback(()=> {
		actions.searchUser(searchBar.current.value.toLowerCase());
		return searchBar.current.value.toLowerCase();
	});

	return (
		<div className="relative font-bold search-container">
			<svg className="absolute w-5 bottom-2.5 mx-4 text-gray-600" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
			</svg>

			<input
				type="search"
				ref={searchBar}
				id="user-action-search"
				className="p-2 border border-gray-100 rounded-sm shadow-md px-14 font-primary bg-tertiary w-80 focus:outline-none focus:ring-primary focus:ring-2"
				placeholder="Search User by Name"
				onChange={handleSearch}
			/>

			<button
				type="button"
				id="user-action-clearinput"
				className="absolute cursor-pointer hover:text-black right-0 w-5 mx-4 text-gray-600 bottom-2.5"
				onClick={clearInput}
			>
				<svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
				</svg>
			</button>
		</div>
	);
};

export default Search;