import React from 'react';


class App extends React.Component {

  voteClick = (id) => {
    console.log(id)
    this.props.store.dispatch({type: 'VOTE'})
  }

  createClick = () => {
    return (event) => {
      event.prevendDefault()
      console.log('creating new...', event)
    }
  }

  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a,b) => {return a.likes-b.likes}).map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick ={(event) => {
                event.preventDefault()
                console.log('clicked', event)
                this.voteClick(anecdote.id)
                }}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form>
          <div><input /></div>
          <button onClick={this.createClick}>create</button> 
        </form>
      </div>
    )
  }
}

export default App