import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class Weather extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={this.props.index}>
          <Accordion.Header>Date: {this.props.data.date}</Accordion.Header>
          <Accordion.Body>
            Weather Description: {this.props.data.description}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default Weather;