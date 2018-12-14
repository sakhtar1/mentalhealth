import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchArticles } from '../actions';
import ArticleNew from './ArticleNew';
//import ArticlesShow from './ArticlesShow';
import Article from '../components/Articles';

class ArticlesPage extends Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  const { match, articles } = this.props;

  render() {
    return (
      <div>
        <Switch>
          <articlesList articles={articles} />
          <Route path={`${match.url}/new`} component={ArticleNew} />
          <Route path={`${match.url}/:articleId`} component={Articles}/>
          <Route exact path={match.url} render={() => (
            <h3>Please select a Article from the list.</h3>
          )}/>
        </Switch>
      </div>;
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps, { fetchArticles })(ArticlesPage);
