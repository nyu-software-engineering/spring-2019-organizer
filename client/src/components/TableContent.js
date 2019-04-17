import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Change from './Change';
import '../css/TimeBlock.css';

class TableContent extends Component {
  constructor(){
    super();
    this.state = {
      isStarted: false,
      isDone: false // need to initiate
    };
  }

  handleStart = () => {
    this.setState({isStarted: true}); // to delete after connect to db
    fetch('/start', {
      method: 'POST',
      body: JSON.stringify({taskid: 'somestring'}), // set taskid
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
		.then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
  }
  
  handleDone = () => {
    this.setState({isDone: true});
    fetch('/done', {
      method: 'POST',
      body: JSON.stringify({taskid: 'somestring'}), // set taskid
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
		.then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
  }

  render() {
    return (
      <Row bsPrefix={this.state.isDone ? "row done" : "row"}>
          <Col>
            <p ref='subject'>{this.props.task.class}</p>
          </Col>
          <Col>
            <p ref='Name'> {this.props.task.name}</p>
          </Col>
          <Col>
            <p ref='Estimated'> {this.props.task.estimated} Hours</p>
          </Col>
          <Col>
            {this.props.task.tag.map(tag => 
              <span ref='Tag'> {tag}</span>
            )}
          </Col>
          <Col>
            <Button variant="light" size="sm" disabled={this.state.isStarted || this.state.isDone} onClick={this.handleStart}>
              <ion-icon name="arrow-dropright-circle"></ion-icon>
            </Button> 
            <Button ref="start" variant="light" disabled={this.state.isDone} size="sm" onClick={this.handleDone}>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </Button> 
            <Change disabled={this.state.isDone} task={this.props.task}/>
            <Button variant="light" size="sm" disabled={this.state.isDone} onClick={this.props.handleDelete}>
              <ion-icon name="trash"></ion-icon>
            </Button>
          </Col>
      </Row>
    )
  }

}

export default TableContent;