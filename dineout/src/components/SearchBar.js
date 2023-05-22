const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

const SearchBar = () => {
    const renderSortByOptions = () => {
      return Object.keys(sortByOptions).map((sortByOption) => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
};

return (
<div className="sortbar">
<div className="sortoptions">
<ul>{renderSortByOptions()}</ul>
</div>
<div className="searchbar">
<input type="text" className="searchterm" placeholder="Japanese"/>
<input type="text" className="location" placeholder="London"/>
</div>
<div className="searchbutton">
<button>Search</button>
</div>
</div>
)
};

export default SearchBar;