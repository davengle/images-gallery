import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Search from './components/Search'
import ImageCard from './components/ImageCard'
import { Container, Row, Col } from 'react-bootstrap'
import Welcome from './components/Welcome'

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [images, setImages] = useState([])

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    fetch(
      `https://api.unsplash.com/photos/random/?query=${searchTerm}&client_id=${UNSPLASH_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        setImages([{ ...data, title: searchTerm }, ...images])
      })
      .catch((err) => {
        console.log(err)
      })
    setSearchTerm('')
  }

  const handleDeleteIamge = (id) => {
    setImages(images.filter((image) => image.id !== id))
  }

  return (
    <div className="App">
      <Header title="Images Gallery"></Header>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSearchSubmit}
      />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col className="pb-3" key={i}>
                <ImageCard image={image} deleteImage={handleDeleteIamge} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  )
}

export default App
