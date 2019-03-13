import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { urlInput: '', titleInput: '', posts: [] };
  
  onInputUrlChange = (e) => {
    this.setState({ urlInput: e.target.value });
    // console.log('set urlInput to: ', e.target.value);
  }
  onInputTitleChange = (e) => {
    this.setState({ titleInput: e.target.value });
    // console.log('set titleInput to: ', e.target.value);
  }
  onSubmit = (e) => {
    e.preventDefault();
    // console.log('The values in the form are: ', this.state);
    const { urlInput, titleInput } = this.state;
    if (urlInput && titleInput) {
      this.setState({ posts: [...this.state.posts, { urlInput, titleInput }] });
    }
    this.setState({ urlInput: '', titleInput: ''});
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit} className='form'>
        <div>
          <input placeholder='Enter URL' value={this.state.urlInput} type='text'
            onChange={this.onInputUrlChange}
          />
        </div>
        <div>
          <input placeholder='Title' value={this.state.titleInput} type='text'
            onChange={this.onInputTitleChange}
            className='title'
          />
          <input value='New Post' type='submit'
            className='post'
          />
        </div>
        <div>
          {this.state.posts.length > 0 ? 
            <ul className='posts_list'>
              {this.state.posts.map((post, index) => {
                return (
                  <li key = {index} className='img'>
                    <h4>{`${post.titleInput}`}</h4>
                    <img src={`${post.urlInput}`} alt='post' />
                  </li>
                );
              })} 
            </ul>
            : null
          }
        </div>
      </form>
    );
  }
}

export default App;

