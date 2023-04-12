import { useContext, useRef } from "react";
import UserContext from "contexts/UserContext";

const Sort = () => {
	const context = useContext(UserContext);
	const { actions } = context;
	const sortOption = useRef();

	const handleSort = ()=>{
		actions.sortUser(sortOption.current.value);
	};

	return (
		<div className="flex items-center gap-4 sort-container font-primary align-center">
			<p className="font-bold">Sort By:</p>

			<select
				ref={sortOption}
				className="p-3 pl-4 pr-20 shadow-md appearance-none cursor-pointer font-primary bg-tertiary hover:bg-quaternary"
				name="SortBy"
				id="user-action-sort"
				onChange={handleSort}
			>
				<option value="default">Default</option>

				<option value="ascending">Ascending</option>

				<option value="descending">Descending</option>
			</select>

		</div>
	);
};

export default Sort;