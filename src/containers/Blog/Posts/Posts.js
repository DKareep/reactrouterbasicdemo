import React, { Component } from 'react';

import Post from '../../../components/Post/Post';

import './Posts.css';
import {Route} from 'react-router-dom';
import Fullpost from '../FullPost/FullPost';

import axios from 'axios';
class Posts extends Component {
    state = {
        posts : [],
        selectedPostId: null,
        error: false
    }
    renderFullPost = (id) => {
        console.log(id);
           this.setState({
            selectedPostId: id
           }, () => {
               console.log(this.state.selectedPostId);
           }) 
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.splice(0,4);
            const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: 'Dijin'
                    }
            })
            this.setState({
                posts: updatedPosts
            })
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            this.setState({
                error: true
            })
        })
    }
    renderFullPost = (id) => {
       this.props.history.push({pathname: '/posts/' + id})
    }
    render () {
        let  posts = <div>Something went wrong</div>;
        if(!this.state.error) {
            posts = this.state.posts.map((post) => {
                console.log(post, 'posts ')
                return (
                         <Post
                key={post.id} 
                title={post.title}
                author={post.author}
                body={post.body}
                clicked={() => this.renderFullPost(post.id)}
                />
           
                )
            })
        }
        
        return (
          <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={Fullpost} />
 </div>          
          
        ); 
    }
}

export default Posts;