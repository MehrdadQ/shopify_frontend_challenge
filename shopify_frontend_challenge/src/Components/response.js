import { Form, Container, Button } from 'react-bootstrap';
import { useState } from 'react'


function Response ({prompt, response}) {
  return (
    <Container className='border border-dark mt-3 p-3'>
        <p>Prompt: {prompt}</p>
        <p>Response: {response}</p>
    </Container>
  )
}

export default Response
