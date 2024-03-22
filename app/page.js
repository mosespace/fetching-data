"use client";
import Link from "next/link";
import Image from "next/image";
import getPredictions from "./libs/getPredictions";
import getSports from "./libs/getSports";
import fetchMovies from "./libs/fetchMovies";
import React, { useState } from "react";

export default async function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const { data } = await getPredictions();
  const movies = await fetchMovies();
  // console.log(movies);
  // console.log(data);
  const quotes = movies;

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };
  const previousQuote = () => {
    setCurrentQuoteIndex((currentIndex) => (currentIndex - 1) % quotes.length);
  };
  return (
    // <main>
    //   <div className='main-styles'>
    //     {/* <div className='predictions'>
    //       {data.splice(0, 10).map((predictions) => {
    //         return (
    //           <div className='predictionStyles'>
    //             <h3>
    //               <b>Home Team:</b> {predictions.home_team}
    //             </h3>
    //             <p>
    //               {" "}
    //               <b>Away Team:</b> {predictions.away_team}
    //             </p>
    //             <p>
    //               {" "}
    //               <b>Market:</b> {predictions.market}
    //             </p>
    //             <h3>
    //               {" "}
    //               <b>Away Team:</b> {predictions.competition_name}
    //             </h3>
    //             <p>
    //               {" "}
    //               <b>Status:</b> {predictions.status}
    //             </p>
    //             <p>
    //               {" "}
    //               <b>Federation:</b> {predictions.federation}
    //             </p>
    //           </div>
    //         );
    //       })}
    //     </div> */}
    //     {/* <div className='sports-data'>

    //   {movies.splice(0, 10).map((movie) =>{
    //       return (
    //           <div className='sportsStyles' key={movie.id}>
    //               <h2>Title: {movie.title}</h2>
    //               <Image src={movie.image} width={150} height={150}/>
    //               <p>Rating: {movie.rating}</p>
    //           </div>
    //       );
    //  })}
    //  </div> */}
    //   </div>
    // </main>

    <div className='flex items-center justify-center'>
      <blockquote>
        <p>{quotes[currentQuoteIndex].text}</p>
        <footer>- {quotes[currentQuoteIndex].author}</footer>
      </blockquote>
      <button onClick={nextQuote}>Next</button>
      <button onClick={previousQuote}>Go Back</button>
    </div>
  );
}

{
  /* <Link href= "/products">Go to Products</Link> */
}
