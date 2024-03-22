const url = "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b7f5de6ad4msh80565c4660c568bp10c022jsn959a5465f659",
    "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
  },
};

export default async function fetchMovies() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
