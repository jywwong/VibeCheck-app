import React, {useState} from 'react';
import './SearchBarStyle.scss';
import Button from '@mui/material/Button';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

const SearchBar = ({searchYelp}) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  const [sortBy, setsortBy] = useState("best_match");

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return sortByOption;
    }
    return "";
  };

   const handleSortByChange = (sortByOption) => {
    setsortBy(sortByOption);
  };

 const renderSortByOptions = () => {
      return Object.keys(sortByOptions).map((sortByOption) => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return (
        <li
        className={getSortByClass(sortByOptionValue)}
        key={sortByOptionValue}
        onClick={()=>{
          handleSortByChange(sortByOptionValue);
        }}
        >
        {sortByOption}
        </li>
        );
    });
};

const handleSearch =
(e) => {e.preventDefault();
searchYelp(term, location, sortBy);
};

const handleSearchTerm =
(e) => {setTerm(e.target.value);
};

const handleLocation =
(e) => {setLocation(e.target.value);
};

return (
<div className="SearchComponent">
<div className={SearchBar}>
<div className="SearchBarSortOptions">
<ul>{renderSortByOptions()}</ul>
</div>
<form onSubmit= {handleSearch}>
<div className="SearchBarFields">
<input type="text" className="searchterm" placeholder="What do you want to do?" onChange={handleSearchTerm} />
<input type="text" className="location" placeholder="Where are you?" onChange={handleLocation}/>
</div>
<div className="submit-container">
<button type="submit">Search</button>
</div>
</form>
</div>
</div>
);
};

export default SearchBar;