/* import { useState } from 'react' */
import IronhackLogo from './assets/ironhack-logo-xs.png'
import MenuTop from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import './App.css'

function App() {
  return <div className='App'>
      <div id='main-div'>
        <img src={IronhackLogo} className='ironhack-logo'alt="Ironhack logo" />
        <img src={MenuTop} className='menutop-logo' alt="Menu top" />    
        <div id='say-hello'>
          <h1>Say hello to <br></br>ReactJS</h1>
          <p>You will learn how to use<br></br> most popular frontend library,<br></br> and become super Ninja developer.</p>
          <span><p>Awesome!</p></span>
        </div>
      </div>
      <div id='icons-div'>
        <div>
          <img src={icon1} alt="Icon 1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="Icon 2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="Icon 3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={icon4} alt="Icon 4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div> 
  </div>

}
export default App












/* function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App */
