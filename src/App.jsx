import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const URL = 'https://test-api-json-server.onrender.com/contacts';

  const [data, getGata] = useState([]);

  function fethData() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        getGata(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fethData()
  }, [])

  const addPost = async () => {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        id: new Date().toISOString(),
        title: 'New item'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => res.json())
      .then(post => console.log(post))
    fethData()
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br/>
        <br/>
        <button onClick={addPost}>add</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
