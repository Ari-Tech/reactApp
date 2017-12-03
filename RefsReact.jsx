import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class RefsReact extends React.Component {
    constructor(props){ 
        super(props)
        this.state={"data":"Init"};
        this.changeText=this.changeText.bind(this);
        this.clearField=this.clearField.bind(this);

    }
    changeText(e){
        this.setState({
            "data":e.target.value
        })
    }
    clearField(){
        this.setState({
            "data":""
        })
        ReactDOM.findDOMNode(this.refs.myInput).focus();   //focus on the input field      
    }
    render(){
        return (
            <div>
            <input type="text" value={this.state.data} onChange={this.changeText} ref = "myInput"/>
            <button onClick={this.clearField}>Clear Field</button>
            <h4>{this.state.data}</h4>
            </div>
        )
    }
}

export default RefsReact;