import React from 'react';
import { connect} from 'react-redux';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {

  componentDidMount () {
    this.props.fetchStream(this.props.match.params.id);
  }

  render () {
    console.log(this.props);
    return (<div>StreamDelete</div>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);