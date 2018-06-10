import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const feedbackReducer = (state = { pos: 0, neutr: 0, neg: 0 }, action) => {
  let pos = state.pos
  let neutr = state.neutr
  let neg = state.neg

  switch (action.type) {
    case 'POSITIVE':
      pos = pos + 1
      return ({ pos, neutr, neg })
    case 'NEUTRAL':
      neutr = neutr + 1
      return ({ pos, neutr, neg })
    case 'NEGATIVE':
      neg = neg + 1
      return ({ pos, neutr, neg })
  }
}


const Statistiikka = () => {
  const palautteita = 0

  if (palautteita === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td></td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td></td>
          </tr>
          <tr>
            <td>huono</td>
            <td></td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td></td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button>nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {
  klik = (nappi) => () => {

  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));