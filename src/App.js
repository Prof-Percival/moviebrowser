//TMDB API Key 7ca0618e400bd1b5bcb0085252d6621f
//URL: https://api.themoviedb.org/3/movie/550?api_key=7ca0618e400bd1b5bcb0085252d6621f

//REQUEST URL: https://api.themoviedb.org/3/search/movie?api_key=7ca0618e400bd1b5bcb0085252d6621f&language=en-US&query=star%20wars&page=1&include_adult=false
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import { Route, Switch } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=7ca0618e400bd1b5bcb0085252d6621f&language=en-US&query=${searchText}&page=1&include_adult=false`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          /*
          console.log(data);
          let newData = data.results;
          let currPage = data.page + 1;
          let lastPage = data.total_pages;
          console.log(newData[0]);
          while (currPage <= lastPage){
            const newUrl = `https://api.themoviedb.org/3/search/movie?api_key=7ca0618e400bd1b5bcb0085252d6621f&language=en-US&query=${searchText}&page=${currPage}&include_adult=false`;

            fetch(newUrl)
            .then(response => response.json())
            .then(data => {

              for (const key in data.results){
               // newData = newData.push(data[key]);
              }
              
            });

            currPage++;
            
          }
          */

          setSearchResults(data.results);
          //console.log(newData);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
      </Switch>
    </div>
  );
}

export default App;
