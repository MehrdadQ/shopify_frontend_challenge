import { Col, Container, Row } from 'react-bootstrap'
import injectSheet from "react-jss"
import {styles} from "./styles"
                
const Response = injectSheet(styles)(({classes, prompt, response, engine}) => {
  const get_engine_name = (engine) => {
    const engine_name =  engine.split("-")[1]
    return engine_name[0].toUpperCase() + engine_name.slice(1)
  }

  return (
    <Container className={classes.response_box}>
        <Row>
            <Col md={3} className={classes.title_column}>Prompt</Col>
            <Col>{prompt}</Col>
        </Row>
        <Row>
            <Col md={3} className={classes.title_column}>Response ({get_engine_name(engine)})</Col>
            {/* remove newline characters from beginning and end of response */}
            <Col>{response.replace(/^\s+|\s+$/g, '')}</Col>
        </Row>
    </Container>
  )
})

export default Response
