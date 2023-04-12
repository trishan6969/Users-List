import { Search, Sort } from "components/User/Options";

const Options = () => {
	return (
		<div className="flex items-center justify-between w-full options">
			<Sort/>
			<Search/>
		</div>
	);
};

export default Options;