import React from 'react'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      blog: props.blog,
      title: props.title,
      author: props.author,
      url: props.url

    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState
  }



  render() {

    const stil = {
      'paddingLeft': '10px',
      border: '2px solid black',
      'borderRadius': '4px',
      margin: '5px'
    }

    //console.log("blog: ", this.state.blog)
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }
    return (
      <div style={stil}>

        <h5 onClick={this.toggleVisibility}>{this.state.blog.title}</h5>
        <p style={showWhenVisible}>Author: {this.state.blog.author}</p>
        <p style={showWhenVisible}>Address: {this.state.blog.url}</p>
        <div style={showWhenVisible}><span>likes: {this.state.blog.likes}</span><button onClick={this.handleClick}>like</button></div>


      </div>


    )
  }


}

export default Blog