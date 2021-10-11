import React from 'react'
import { Container,Alert } from 'react-bootstrap'

const Error = ({error}) => {
    return (
        <Container>
        <Alert variant="danger">
{error}
</Alert>
    </Container>
)
}

export default Error
