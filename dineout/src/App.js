import React, {useState} from "react";
import './App.scss';
import BusinessList from './components/businesslist/BusinessList';
import SearchBar from './components/searchbar/SearchBar';
import Yelp from './utils/Yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term,location,sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };

  return (
    <div className="App">
        <h1>
        Vibe Check
        </h1>
        <p>
        Check out resturants or venues in the area before you go!
        </p>
        <SearchBar searchYelp={searchYelp}/>
        <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
