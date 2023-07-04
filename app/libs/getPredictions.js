const url = 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01&federation=UEFA';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31645005f8msh7fbb8b5c99d4e27p196c23jsnfd21028b6e50',
		'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
	}
};
export default async function getPredictions() {
    const response = await fetch(url, options);
	const prediction = await response.json();
    return prediction
}