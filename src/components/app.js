import React, { Component } from 'react';
import VideoList from '../container/video-list';
import VideoDetail  from '../container/videoDetails';
import {Navbar, NavItem, Col} from 'react-materialize';
export default class App extends Component {
  render() {
    return (
     <div className ="row">
      <div className="col s12">
       <Navbar brand='VideoList' right>
	     <NavItem href='get-started.html'>Getting started</NavItem>
	     <NavItem href='components.html'>Components</NavItem>
       </Navbar>
       <Col m={12} s={12} >
         <VideoList />
         <VideoDetail />
        </Col>
       </div>
      </div>
    );
  }
}
