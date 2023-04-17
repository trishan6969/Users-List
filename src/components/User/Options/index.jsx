import Search from "components/User/Options/Search";
import Sort from "components/User/Options/Sort";

const Options = () =>
	<div className="flex items-center justify-between w-full options">
		<Sort/>
		<Search/>
	</div>;

export default Options;