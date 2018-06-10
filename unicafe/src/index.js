import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import feedbackReducer from './feedbackReducer';


const store = createStore(feedbackReducer)

const Statistiikka = () => {

  const state = store.getState()
  const palautteita = state.total

  const pos = store.getState().pos
  const neg = store.getState().neg
  let keskiarvo
  let positiivisia

  if (palautteita === 0) {
    keskiarvo = 0.000
    positiivisia = 0.00
  } else {
    keskiarvo = ((pos - neg) / palautteita).toFixed(3)
    positiivisia = (pos / palautteita).toFixed(2)
  }


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
            <td>{store.getState().pos}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{store.getState().neutr}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{store.getState().neg}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{keskiarvo}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{positiivisia}%</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => store.dispatch({ type: 'RESET' })}>nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {
  klik = (nappi) => () => {
    switch (nappi) {
      case 'GOOD':
        store.dispatch({ type: 'POSITIVE' })
        break
      case 'OK':
        store.dispatch({ type: 'NEUTRAL' })
        break
      case 'BAD':
        store.dispatch({ type: 'NEGATIVE' })
        break
      case 'RESET':
        store.dispatch({ type: 'RESET' })
    }
  }

  render() {
    console.log('rendered')
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
const renderApp = () => { ReactDOM.render(<App />, document.getElementById('root')) }

renderApp()

store.subscribe(() => {
  renderApp()
})