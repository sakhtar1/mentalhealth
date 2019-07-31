import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle, likesArticle } from '../actions/articleActions';
import moment from "moment";



class ArticlesPage extends Component {

     state = {
        buttonLike: 'Like!',
        
    }
    
    handleClickDelete = (event) => {
        event.preventDefault()
        this.props.deleteArticle(this.props.article.id);
        alert("Your article has been removed!")
        this.props.history.push({pathname:'/articles/'});
    }

    handleClickLike = (event) => {
        event.preventDefault()
        let currentArticle = this.props.article
        currentArticle.likes += 1
        this.props.likesArticle(currentArticle);
        this.setState ({ buttonLike: 'Liked!' })
   };

   handleClickBack = (event) => {
        event.preventDefault()
        this.props.history.push({pathname:'/articles/'});
   }


    // onClickaddName = () => {
    //     let newIndex = Math.floor(Math.random() * Math.floor(this.state.names.length));
    //     this.setState({currentNameIndex: newIndex})
    //     }

    // addName = () => {
    //     let names = this.state.names
    //    let newNames = names.concat(this.state.testName)
    //    //names.push(this.state.testName)
    //     this.setState({name: this.state.testName, names: newNames, testName: ''})
    // }

    // handleChange = (e) => {
    //     this.setState({testName: e.target.value})
    // }

    // handleClickLikes =(event) => {
    //     event.preventDefault()
    //     this.setState ({bLike: this.state.bLike + 1})
    // }




    render(){
        
            let  likekey  = this.props.article.likes === 1 ? 'like' : 'likes';
           

        return(
            <div className="articleshow">

                

                <h1 className="title"> {this.props.article.title}</h1>
                 <div>
                  <img 
                    className="image"
                    src={this.props.article.image}
                    alt={this.props.article.title}

                    />
                </div>

                <br></br>
                <div>
                    <p className = "content"> {this.props.article.content}</p>
                </div>
                <p> Author: {this.props.article.author}</p>
                <br></br>
                <div>
                    <p> Date: { moment(this.props.article.created_at).format('MMMM Do YYYY') }</p>
                </div>
                <br></br>
                <div>
                    <input type='button' className= 'btn-primary' 
                    value={this.state.buttonLike} 
                    onChange={(event) => this.setState({buttonLike: event.target.value})} 
                    onClick={this.handleClickLike} />
                      <div style={{display: 'inline', marginLeft: 10}}>
                        {this.props.likes} {likekey}
                        <button id="back" className="btn-secondary" onClick={this.handleClickBack}>
                        Back </button>
                      </div>
                </div>
                <br></br>
                <div className="field">
                        <p className="control">
                          <button className="button is-success" onClick={this.handleClickDelete}>
                            Remove Article
                          </button>
                        </p>
        
                      </div>
               
          
            </div>
        )
    }
};



const mapStateToProps = state => {
    return {
       article: state.articleView[0][0],
       likes: state.articleView[0][0].likes
    };
}

export default connect(mapStateToProps, { deleteArticle, likesArticle })(ArticlesPage);

