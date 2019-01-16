import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions';

class ArticleNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addArticle, history } = this.props
    addArticle(this.state);
    history.push('/Articles');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add an Article</h2>
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleOnChange} />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleOnChange} />
          <input
            type="submit"
            value="Add Article" />
        </form>
      </div>
    );
  }
};

export default connect(null, { addArticle })(ArticleNew);