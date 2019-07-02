import React, { Component } from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
    margin: 20px
`
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => this.setState({
            posts: data
        }))

    }

  render() {
      console.log(this.state);
      const posts = this.state.posts.map(post => (
        <PostContainer key={post.id}>
            titile: {post.title}
            content: {post.body}
        </PostContainer>
    ));

    return (
      <div>
        <h3>Post</h3>
        {posts}
      </div>
    )
  }
}

export default Posts;
