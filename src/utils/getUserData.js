const getUserData = async () =>{
	const API_URL = import.meta.env.VITE_API_URL;
	try{
		const response = await fetch(API_URL);
		const result = await response.json();
		const { results } = result;
		return results;
	}
	catch(error){
		return error;
	}
};

export default getUserData;