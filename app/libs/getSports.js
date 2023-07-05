const url = "https://imdb-top-100-movies.p.rapidapi.com/"

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '31645005f8msh7fbb8b5c99d4e27p196c23jsnfd21028b6e50',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};
export default async function getSports() {
  const response = await fetch(url, options);
  const sports = await response.json();
  return sports;
}
