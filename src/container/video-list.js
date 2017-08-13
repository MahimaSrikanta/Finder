import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/index';
import { bindActionCreators } from 'redux'; // to make sure the action flows through all the reducers
import {Card, Col} from 'react-materialize';

class VideoList extends Component {

	renderList() {
    return this.props.videos.map((book,index) => {
      return (
         <Col m={12} s={12} key={index}>
		        <Card className='blue-grey darken-1' textClassName='white-text' title={book.title}   onClick = {() => this.props.selectVideo (book)}>
		          {book.title}
		        </Card>
          </Col>    
      );
    });
	}
  render() {
    return (
      <ul>
        <Col m={4} s={12}>
        {this.renderList()}
        </Col>
      </ul>
    );
  }
}

function mapStateToProps(state) {
	// whaterver gets returned from here will show up as props in videoList
	return {
		videos: state.videos
	}
}

//Anything returned from this function will end up as props on the videoList 
function mapdispatchToProps(dispatch) {
	//whenever selectBook is called, the result should be passed to all reducers
	return bindActionCreators({selectVideo: selectVideo}, dispatch);

}

export default connect(mapStateToProps, mapdispatchToProps)(VideoList);