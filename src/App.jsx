import Dice from './Dice.jsx'
import './App.css'

function App() {
  return (
    <div className="App"> 
      <main className="max-w-xl mx-auto my-14 p-10 bg-gray-50 rounded-xl text-gray-900 text-center">
          <h1 className="font-bold text-4xl mb-2">Tenzies</h1>
          <p className="max-w-sm mx-auto text-md text-gray-600">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <Dice />
      </main>
    </div>
  )
}

export default App
