import React from 'react';


class App extends React.Component {

  voteClick = (id) => () => {
    console.log(id)
    this.props.store.dispatch({ type: 'VOTE', data: { id } })
  }

  createAnecdote = (event) => {
    console.log('creating 1')
    event.preventDefault()
    const anec = {
      content: event.target.anecdote.value,
      votes: 0,
      id: Math.floor(Math.random() * 10000) 
    }
    
    console.log('creating new...', anec)
    this.props.store.dispatch({type: 'NEW_ANECDOTE', data: anec})

  }

  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => { return b.votes - a.votes }).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.voteClick(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.createAnecdote}>
          <div><input name='anecdote' /></div>
          <button type='submit'>create</button>
        </form>
      </div>
    )
  }
}

export default App