import PropTypes from "prop-types";

const TableBody = (props) => {
	const { data } = props;
	const { name, location, email, login, picture, phone } = data;

	return (
		<tr className="text-center odd:bg-tertiary even:bg-quaternary">
			<td className="user-data">
				<img
					className="w-12 h-12 rounded-full objectect-cover m-auto"
					src={picture.thumbnail}
					alt={`${name.first} ${name.last}`}
				/>
			</td>

			<td className="user-data">
				{name.first} {name.last}
			</td>

			<td className="user-data">{email}</td>

			<td className="user-data">{login.username}</td>

			<td className="user-data">{login.password}</td>

			<td className="user-data">{phone}</td>

			<td className="user-data">
				{location.city}, {location.country}
			</td>
		</tr>
	);
};

TableBody.propTypes = {
	data: PropTypes.object,
	name: PropTypes.object,
	location: PropTypes.object,
	email: PropTypes.string,
	login: PropTypes.object,
	picture: PropTypes.object,
	phone: PropTypes.string,
};

export default TableBody;