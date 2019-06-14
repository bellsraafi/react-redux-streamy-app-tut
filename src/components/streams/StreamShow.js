import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions'; 

class StreamShow extends React.Component {

  componentDidMount () {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderStream = () => {
    const { title, description } = this.props.stream;
    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }

  render () {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {this.renderStream()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);