import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const About = () => {
    return (
        <>
        <Container className="mt-5 text-center">
        <h2  className="mb-3">Who we Are ?</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum fugiat veniam fuga nam tempora accusamus perspiciatis cumque animi rem earum, quos corporis! Commodi, aliquam aspernatur modi sunt rerum quasi.</p>
        <h2 className="mb-3">Our Speciality</h2>
        <Row>
            <Col md={4}>
            <h3>Lorem, ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto velit tenetur quae corrupti. Quaerat id unde optio necessitatibus fuga?</p>
            </Col>
            <Col md={4}>
            <h3>Lorem, ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto velit tenetur quae corrupti. Quaerat id unde optio necessitatibus fuga?</p>
            </Col>
            <Col md={4}>
            <h3>Lorem, ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto velit tenetur quae corrupti. Quaerat id unde optio necessitatibus fuga?</p>
            </Col>
        </Row>
        </Container>
            
        </>
    )
}

export default About
