import PropTypes from "prop-types";

const Error = ({ message }) =>
	<p className="text-lg font-bold text-red-500 error font-primary mt-52">
		{message}
	</p>;

Error.propTypes = {
	message: PropTypes.string
};

export default Error;