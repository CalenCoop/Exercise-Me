

export async function fetchExercises(bodyPart){
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
    const options = {
        method: 'GET',
	    headers: {
		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};
try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result
} catch (error) {
    console.log(error);
}
}