import React, { Component } from 'react'

export default class Postform extends Component {
  state = {
    title: '',
    body: ''
  }

  handleTitle = (e) => this.setState({title:e.target.value})
  handleBody = (e) => this.setState({body:e.target.value})
  handleAddPost = (e) => {
    e.preventDefault();
    const newPost = {
      title: this.state.title,
      body: this.state.body
    }

    fetch("https://jsonplaceholder.typicode.com/posts",{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPost) 
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form>
          <div>
            <label>Title:</label>
            <br/>
            <input type="text" onChange={this.handleTitle} name="title"/>
          </div>
          <div>
            <label>Body:</label>
            <br/>
            <textarea name="" id="" cols="30" rows="10" onChange={this.handleBody}></textarea>
          </div>
          <button type="submit" onClick={this.handleAddPost}>Agregar</button>
        </form>
      </div>
    )
  }
}
