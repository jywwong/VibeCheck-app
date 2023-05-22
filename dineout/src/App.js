import logo from './logo.svg';
import './App.css';
import Business from './components/Business';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Dineout app
        </p>
        <SearchBar/>
        <Business/>
        <BusinessList/>
      </header>
    </div>
  );
}

export default App;
