import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import UserContext from "contexts/UserContext";
import TableBody from "components/User/TableBody";
import { Error, Spinner } from "components/Common";

const Table = () => {
	const context = useContext(UserContext);
	const { states, actions } = context;

	useEffect(() => {
		actions.getData();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center mt-10">
			<button
				id="user-action-refresh"
				type="button"
				disabled={states.loading}
				className="bg-primary text-white py-3 font-primary rounded-md px-6 font-bold hover:bg-[#da5b7f]"
				onClick={actions.getData}
			>
				Refresh
				<FontAwesomeIcon className="ml-3" icon={faArrowsRotate} />
			</button>

			<table className="table-auto my-8 mx-2 w-9/12 font-primary">
				<thead>
					<tr className="bg-secondary text-black">
						<th className="table-heading">Picture</th>
						<th className="table-heading">Name</th>
						<th className="table-heading">Email</th>
						<th className="table-heading">Username</th>
						<th className="table-heading">Password</th>
						<th className="table-heading">Phone</th>
						<th className="table-heading">Location</th>
					</tr>
				</thead>

				<tbody>
					{states.loading &&
					<tr>
						<td colSpan="7" align="center">
							 <Spinner />
						</td>
					</tr>
					}

					{states.error &&
					<tr>
						<td colSpan="7" align="center">
							 <Error />
						</td>
					</tr>
					}

					{states.userData &&
						states.userData.map((data) => (
							<TableBody data={data} key={data.login.uuid} />
						))
					}
				</tbody>
			</table>
		</div>
	);
};

export default Table;