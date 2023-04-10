import spinner from "src/assets/spinner.gif";

const Spinner = () => {
	return (
		<img
			src={spinner}
			alt="Loading..."
			className="w-24 mt-40"
		/>
	);
};

export default Spinner;