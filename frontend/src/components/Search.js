// import react from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = ( {searchTerm, setSearchTerm, handleSubmit } ) => {
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs={12} md= {8}>
                    <Form onSubmit={ handleSubmit }>
                        <Form.Row>
                            <Col xs={9}>
                                <Form.Control 
                                    type="text"
                                    value = { searchTerm }
                                    onChange = { (e) => setSearchTerm(e.target.value) }
                                    placeholder="Search for new image..."/>
                            </Col>
                            <Col>
                                <Button variant="primary" type="Submit"> Search </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;