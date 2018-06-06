import React from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import loginService from './services/login'
import blogService from './services/blogs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      newBlog: '',
      username: '',
      password: '',
      token: null,
      error: '',
      user: null

    }
  }

  login = async (event) => {
    event.preventDefault()
    console.log('logging in')

    try {
      const userObj = { username: this.state.username, password: this.state.password }
      const user = await loginService.login(userObj)

      this.setState({ username: '', password: '', user })

    } catch (err) {
      console.log(err)
      this.setState({ error: 'Käyttäjätunnus tahi salasana onpi virheellinen' })
      setTimeout(() => { this.setState({ error: '' }) }, 5000)
    }
  }

  handleLoginFieldChange = (event) => {
    event.preventDefault()
    console.log("1 ", event.target.value, " ", event.target.name)
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
  }

  render() {
    if (this.state.user === null) {
      return (
        <div>
          <h3 class="error">{this.state.error}</h3>
          <Login login={this.login} handleLoginFieldChange={this.handleLoginFieldChange} state={this.state} />
        </div>
      )
    } else {
      return (
        <div>
          <h2>blogs</h2>
          {this.state.blogs.map(blog =>
            <Blog key={blog._id} blog={blog} />
          )}
        </div>
      );
    }
  }
}

export default App;
