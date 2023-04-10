import { useState, useEffect, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import TableBody from "components/User/TableBody";
import { Error, Spinner } from "components/Utils";

export const UserContext = createContext();

const Table = () => {
	const [ userData, setUserData ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);
	const API_URL = import.meta.env.VITE_API_URL;

	useEffect(()=>{
		getUserData();
	}, []);

	const getUserData = async () =>{
		setError(false);
		setLoading(true);
		setUserData(null);
		try{
			const response = await fetch(API_URL);
			const result = await response.json();
			const { results } = result;
			setUserData(results);
		}
		catch(error){
			setError(true);
		}
		finally{
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center mt-10">
			<button
				disabled={loading}
				type="button"
				id="user-action-refresh"
				className="bg-primary text-white py-3 font-primary rounded-md px-6 font-bold hover:bg-[#da5b7f]"
				onClick={getUserData}
			>
                Refresh
				<FontAwesomeIcon className="ml-3" icon={faArrowsRotate}/>
			</button>

			{loading && <Spinner/>}

			{error && <Error/>}

			{userData &&
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
					{userData.map((data)=>(
						<UserContext.Provider value={data} key={data.login.uuid}>
							<TableBody/>
						</UserContext.Provider>
					))}
				</tbody>
			</table>
			}
		</div>
	);
};

export default Table;