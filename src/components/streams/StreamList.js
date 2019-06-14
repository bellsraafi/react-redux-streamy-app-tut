import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {

  componentDidMount () {
    this.props.fetchStreams();  
  }

  renderUserActionButtons = (stream) => {
    if (stream.userId === this.props.currentUserId ){
      return (
        <div className="right floated content" style={{marginTop:10}}>
          <Link to={`/streams/edit/${stream.id}`} className="ui button mini primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button mini negative">Delete</Link>
        </div>
      );
    }
    
  }

  renderCreateStreamButton = () => {
    return this.props.isSignedIn ? (
      <Link className="ui button primary" to="/streams/new">Create Stream</Link>
    ) : null;
  };

  renderStreams = () => {
    if (this.props.streams)
      return this.props.streams.map(stream => {
        return (
          <div className="item" key={stream.id}>
            {this.renderUserActionButtons(stream)}
            <i className="large middle aligned icon camera" />
            <div className="content">
              <h5>{stream.title}</h5>
              <div className="description">{stream.description}</div>
            </div>
          </div>
        );
      });
    else return null;
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreams()}</div>
        <div style={{textAlign:'right'}}>{this.renderCreateStreamButton()}</div>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return { 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);