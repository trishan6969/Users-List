import { useCallback, useRef, useContext } from "react";
import UserContext from "contexts/UserContext";

const Options = () => {
	const context = useContext(UserContext);
	const { actions } = context;
	const searchBar = useRef();

	const clearInput = useCallback(() =>{
		searchBar.current.value = "";
		actions.searchUser(searchBar.current.value);
	});

	const handleSearch = ()=> {
		actions.searchUser(searchBar.current.value.toLowerCase());
	};

	return (
		<div className="flex items-center justify-between w-full options">
			<select className="p-3 pl-4 pr-10 shadow-md cursor-pointer font-primary bg-tertiary hover:bg-quaternary" name="" id="">
				<option value="asc">Ascending</option>

				<option value="desc">Descending</option>
			</select>

			<div className="relative font-bold search-container">
				<svg className="absolute w-5 bottom-2.5 mx-4 text-gray-600" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
				</svg>

				<input onChange={handleSearch} ref={searchBar} type="search" className="p-2 border border-gray-100 rounded-sm shadow-md px-14 font-primary bg-tertiary w-80 focus:outline-none focus:ring-primary focus:ring-2" name="" id="" placeholder="Search User by Name" />

				<button className="absolute cursor-pointer hover:text-black right-0 w-5 mx-4 text-gray-600 bottom-2.5" onClick={clearInput}>
					<svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Options;