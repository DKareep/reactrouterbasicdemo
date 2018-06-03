import React, { Component } from 'react';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

class Blog extends Component {
    state = {
        posts : [],
   
    }

    render () {
        return (
            <div>
                <header >
                    <nav>
                        <ul className="Navingationul">
                            <li><NavLink 
                            to='/posts' 
                            exact
                            activeClassName="activeCustom"
                            >Posts</NavLink>
                            
                            </li>
                            <li><NavLink 
                             activeClassName="activeCustom"
                            to={{
                                 pathname: "/new-post",
                                 hash: 'submit',
                                 search: '?quick-submit=true'   

                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch> 
                
               <Route path="/new-post" component={NewPost} />
               <Route path="/posts"  component={Posts} />
                <Redirect from="/" to="/posts" />

               </Switch>
            </div>
        );
    }
}

export default Blog;