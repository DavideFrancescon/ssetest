import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const url = ""
  useEffect(()=>{
    const orgListener = new EventSource(url+`organizations/sse?lasteventid=123&jwt=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGbG93ZW50aSBTZXJ2ZXIgL3YxIiwiZXhwIjoxNjYyODg1Njg4LCJuYmYiOjE2NjAyOTMzODgsImlhdCI6MTY2MDI5MzY4OCwidXNlcmlkIjoiMiIsInJvbGVzIjoiIiwiU2VydmVyTmFtZSI6IkZsb3dlbnRJc0VydmVyIiwibGFzdC1ldmVudC1pZCI6IjQ2MDkiLCJ1c2VybmFtZSI6ImMuYW1lcmljYUBtYXJ2ZWwuaXQifQ.sFOG9VugXUurWq7_Y3P50JY6oOd7pEOlox7grBedbJvS7c7V09T6zz2YR5ZmZBImSjkNq_NdKHGTvFj-6NLVvA&retry=5000`)
    //ascolto l'evento "organizations"
    orgListener.addEventListener("organizations", (event) => {
        const data = JSON.parse(event.data)
        console.log(data)
        // const newJWT = data.eventstream.token
        // const newLastID = data.eventstream.lasteventid
        // dispatch(addJwt(newJWT))
        // dispatch(addLastEventID(newLastID))
        // console.log(newJWT)
    })
    orgListener.addEventListener("open", ()=>{
        console.log("open")
    })
    orgListener.addEventListener("error", (e)=>{
        console.log("errore")
        console.log(e)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
