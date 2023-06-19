import React from 'react';
import Alert from 'react-bootstrap/Alert';

class Error extends React.Component {
    render() {
        return (
            <>
                <Alert variant="warning">
                    <Alert.Heading>Unable to use your entry, try again.</Alert.Heading>
                    <p>{this.props.errorMessage}</p>
                </Alert>
            </>
        )
    }
}

export default Error;