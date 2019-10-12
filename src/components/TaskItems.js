import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';

export class TaskItems extends Component {
    render() {
        return (
            // <Container>
            //     {/* <Row className="show-grid"> */}
            //         {/* <Col xs={1} md={4}></Col> */}
            //         <Col xs={4} md={4}>{ this.props.task.title }</Col>
            //         {/* <Col xs={1} md={4}></Col> */}
            //     {/* </Row> */}
            // </Container>
            <div className="taskItem">
                <h6>{ this.props.task.title }</h6>
            </div>
        );
    }
}

export default TaskItems
