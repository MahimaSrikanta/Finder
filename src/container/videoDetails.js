import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardTitle, Col} from 'react-materialize';

 class VideoDetails extends Component {
	render() {
    if(!this.props.activeVideo) {
    	return <div> select book to get started </div>
    }	else {	
		  return (
		  <div>
			  <Col m={12} s={12} >
			    <Card className='small'>
	           {this.props.activeVideo.title} 
          </Card>
        </Col>
       </div>
		  );
		}
	}
}

function mapPropsToStore (state) {  //application state
	return {
		activeVideo : state.activeVideo
	}
  
}


export default connect (mapPropsToStore) (VideoDetails)