import React,{Component} from 'react'

class Forms1 extends Component {
    constructor(props){
        super(props)
        this.state={"data":"Init"};
        
        this.onTextChange=this.onTextChange.bind(this);
    }
    onTextChange(d){
        this.setState({
            "data":d
        })
    }
    render(){
        return (
            <ChildForm textdata={this.state.data} onTextChange={this.onTextChange}/>
        )
    }
}

class ChildForm extends Component{
    constructor(props){
        super(props)
        this.changeData=this.changeData.bind(this)
    }
    changeData(e){
        this.props.onTextChange(e.target.value)
    }
    render(){
        return (
            <div>
            <input type="text" value={this.props.textdata} onChange={this.changeData}/>
            <div>{this.props.textdata}</div>
            </div>
        )
    }
}

export default Forms1;