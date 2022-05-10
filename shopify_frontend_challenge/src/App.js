import { Form, Container, Button } from 'react-bootstrap';
import { useState } from 'react'
import Response from "./Components/response.js"

import injectSheet from "react-jss"
import {styles} from "./styles"

const App = injectSheet(styles)(({classes}) => {
  const [input, set_input] = useState("")
  const [responses, set_responses] = useState([])

  return (
    <div className={classes.container}>
      <Container>
        <h1 className="mt-5">Fun with AI</h1>
        <Form.Group className={classes.form_group}>
          <Form.Control 
            value={input} 
            as="textarea"
            placeholder="Enter prompt here..." 
            onChange={(e) => {set_input(e.target.value)}}
            className={classes.input_box}/>
        </Form.Group>
        <button 
          className={classes.button}
          onClick={() => {
            const data = {
              prompt: input,
              temperature: 0.5,
              max_tokens: 64,
              top_p: 1.0,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,
            }
            
            fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
              credentials: "same-origin",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
              },
              body: JSON.stringify(data),
            }).then(response => response.json())
            .then(data => {
              console.log(data)
              set_responses([...responses, {prompt: input, response: data.choices[0].text}])
            });
          }}  
        >Submit</button>
      </Container>
      <Container className='mt-5'>
        {responses.length > 0 ? <h2>Responses</h2> : <h2 className='text-center'>No responses yet</h2>}
        {responses.map((item) => {
          return <Response prompt={item.prompt} response={item.response}/>
        })}
      </Container>
    </div>
  )
})

export default App;
