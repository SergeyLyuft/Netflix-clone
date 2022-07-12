import React from "react"
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy movie" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror movie" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romance movie" fetchUrl={requests.fetchRomanceMovie} />
    </div>
  );
}

export default App;
