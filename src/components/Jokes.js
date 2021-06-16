import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Joke() {

 const [joke, setJoke] = useState('');

 useEffect( () => {
   axios
   .get('https://icanhazdadjoke.com/', {
     headers: {Accept: 'application/json'}
   })
   .then(res => setJoke(res.data),)
   .catch(err => console.log(err))
 }, [])


 const fetchJoke = () => {
  axios
  .get('https://icanhazdadjoke.com/', {
    headers: {Accept: 'application/json'}
  })
  .then(res => setJoke(res.data),)
  .catch(err => console.log(err))
 }

  return (
    <div className="mt-4">
      <Card>
  <Card.Header>Dad Jokes</Card.Header>
  <Card.Body>
    <Card.Text> {joke.joke}
    </Card.Text>
    <Button variant="primary" onClick={fetchJoke}>Get another joke</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Joke
