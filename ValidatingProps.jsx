import React,{Component} from 'react';
import PropTypes from 'prop-types';

class ValidatingProps extends Component {
    render(){
        return (
            <div>
            <h1>Yo Man {this.props.name}</h1>
            <h2>{this.props.age}</h2>
            <h2>{this.props.address}</h2>
            </div>
        )
    }
}
ValidatingProps.defaultProps={
    "name":"Arindam",
    "age":29,
    "address":"SG"
}
ValidatingProps.propTypes={
    "name":PropTypes.string,
    "age":PropTypes.number,
    "address":PropTypes.string.isRequired
}
export default ValidatingProps;