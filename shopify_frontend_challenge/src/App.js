import { Form, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Response from "./Components/response.js"

import injectSheet from "react-jss"
import {styles} from "./styles"

function save_to_local_storage(response) {
  let responses
  if (localStorage.getItem("responses") === null) {
    responses = []
  } else {
    responses = JSON.parse(localStorage.getItem("responses"))
  }
  responses.unshift(response)
  localStorage.setItem("responses", JSON.stringify(responses))
}

function get_from_local_storage() {
  let responses
  if (localStorage.getItem("responses") === null) {
    responses = []
  } else {
    responses = JSON.parse(localStorage.getItem("responses"))
  }
  return responses
}

const App = injectSheet(styles)(({classes}) => {
  const [input, set_input] = useState("")
  const [responses, set_responses] = useState([])
  const [engine, set_engine] = useState("text-curie-001")

  useEffect(() => {
    set_responses(get_from_local_storage())
}, [])

  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.top_bar}>
          <h1>Fun with AI</h1>
          <Form.Select aria-label={engine} className={classes.dropdown} onChange={(e) => set_engine(e.target.value)}>
            <option value="text-curie-001">Curie</option>
            <option value="text-davinci-002">Davinci</option>
            <option value="text-babbage-001">Babbage</option>
            <option value="text-ada-001">Ada</option>
          </Form.Select>
        </div>
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
            
            fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
              credentials: "same-origin",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
              },
              body: JSON.stringify(data),
            }).then(response => response.json())
            .then(data => {
              save_to_local_storage({prompt: input, response: data.choices[0].text})
              set_responses(get_from_local_storage())
            })
          }}  
        >Submit</button>
      </Container>
      <Container className='mt-5'>
        {responses.length > 0 ? <h2>Responses</h2> : <h2 className='text-center'>Try entering a prompt in the textbox above</h2>}
        {responses.map((item, index) => {
          return <Response key={`response_${index}`} prompt={item.prompt} response={item.response}/>
        })}
      </Container>
    </div>
  )
})

export default App
