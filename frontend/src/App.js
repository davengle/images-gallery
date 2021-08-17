import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Search from './components/Search'

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log(searchTerm)
    fetch(
      `https://api.unsplash.com/photos/random/?query=${searchTerm}&client_id=${UNSPLASH_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
    setSearchTerm('')
  }

  return (
    <div className="App">
      <Header title="Images Gallery"></Header>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSearchSubmit}
      />
    </div>
  )
}

export default App
