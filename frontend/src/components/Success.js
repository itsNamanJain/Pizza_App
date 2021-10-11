import React from 'react'
import { Container,Alert } from 'react-bootstrap'

const Success = ({success}) => {
    return (
        <Container>
            <Alert variant="success">
    {success}
  </Alert>
        </Container>
    )
}

export default Success
