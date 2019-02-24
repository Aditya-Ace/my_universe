import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from './../actions/postActions';

class Post extends Component {
  handleDelete = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn red" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    ) : (
      <div className="center">
        <p>Loading Post...</p>
      </div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.post_id, 10);
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
