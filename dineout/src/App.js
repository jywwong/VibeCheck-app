import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

const businesses = [{
  imageURL: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  imgAltName: 'camden_pizzeria',
  width: '300px',
  name: 'Camden Pizzeria',
  address: '999 Road',
  city: 'London',
  category: 'Italian',
  rating: '5 stars',
  reviewCount: '35'},

  {imageURL: 'https://images.unsplash.com/photo-1642371594073-02141d5c779e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
  imgAltName: 'Olive',
  width: '300px',
  name: 'Olive',
  address: '535 Road',
  city: 'Brighton',
  category: 'Greek',
  rating: '4 stars',
  reviewCount: '22'},

  {imageURL: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
  imgAltName: 'Takashi_Sushi',
  width: '300px',
  name: 'Takashi_Sushi',
  address: '111 Road',
  city: 'Liverpool',
  category: 'Japanese',
  rating: '5 stars',
  reviewCount: '55'}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Dineout app
        </p>
        <SearchBar/>
        <BusinessList businesses={businesses}/>
      </header>
    </div>
  );
}

export default App;
