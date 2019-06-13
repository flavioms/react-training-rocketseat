import React, { Component } from 'react';
import api from '../services/api';
import './News.css';

export default class News extends Component {
  state = {
    runTask: false,
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({runTask: true})
    const formData = new FormData();
    formData.append('image', this.state.image);
    formData.append('author', this.state.author);
    formData.append('place', this.state.place);
    formData.append('description', this.state.description);
    formData.append('hashtags', this.state.hashtags);
    await api.post('posts', formData)
    this.setState({runTask: false})
    this.props.history.push('/');
  }

  handleImageChange = e => {
    this.setState({
      image: e.target.files[0]
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form id='new-post' onSubmit={this.handleSubmit}>
        <input type='file' onChange={this.handleImageChange}/>
        <input
          type='text'
          name='author'
          placeholder='Autor do Post' 
          onChange={this.handleChange}
          value={this.state.author}/>
        <input
          type='text'
          name='place'
          placeholder='Local do Post' 
          onChange={this.handleChange}
          value={this.state.place}/>
        <input
          type='text'
          name='description'
          placeholder='Descrição do Post' 
          onChange={this.handleChange}
          value={this.state.description}/>
        <input
          type='text'
          name='hashtags'
          placeholder='Hashtags do Post' 
          onChange={this.handleChange}
          value={this.state.hashtags}/>
        
        <button type='submit'>Enviar</button>

        {!!this.state.runTask && <h1>Carregando...</h1>}

      </form>
    );
  }
}
