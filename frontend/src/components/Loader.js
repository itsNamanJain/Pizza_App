import React from 'react'
import {Spinner,Container} from 'react-bootstrap'

const Loader = () => {
    return (
        <Container>
            <Spinner animation="border" variant="primary" />
        </Container>
    )
}

export default Loader
