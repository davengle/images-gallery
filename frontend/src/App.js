import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search'



function App() {
 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log(searchTerm)
  }


  return (
    <div className="App">
      <Header title="Images Gallery"></Header>
      <Search searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } handleSubmit={ handleSearchSubmit }/>
    </div>
  );
}

export default App;
