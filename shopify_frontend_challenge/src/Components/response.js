import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react'
import injectSheet from "react-jss"
import {styles} from "./styles"
                
const Response = injectSheet(styles)(({classes, prompt, response}) => {
  return (
    <Container className={classes.response_box}>
        <Row>
            <Col md={3} className={classes.title_column}>Prompt</Col>
            <Col>{prompt}</Col>
        </Row>
        <Row>
            <Col md={3} className={classes.title_column}>Response</Col>
            <Col>{response}</Col>
        </Row>
    </Container>
  )
})

export default Response
