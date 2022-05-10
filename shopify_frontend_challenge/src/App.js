import { Form, Container, Button } from 'react-bootstrap';
import { useState } from 'react'
import Response from "./Components/response.js"

function App() {
  const [input, set_input] = useState("")
  const [responses, set_responses] = useState([])

  return (
    <div>
      <Container>
        <h1 className="mt-5">Fun with AI</h1>
        <Form.Group>
          <Form.Label>Enter Prompt</Form.Label>
          <Form.Control 
            value={input} 
            as="textarea"
            placeholder="Enter text here..." 
            onChange={(e) => {set_input(e.target.value)}}
            style={{height: "100px"}}/>
          <Button 
            style={{float: "right"}}
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
          >Send</Button>
        </Form.Group>
      </Container>
      <Container>
        {responses.map((item) => {
          return <Response prompt={item.prompt} response={item.response}/>
        })}
      </Container>
    </div>
  )
}

export default App;
