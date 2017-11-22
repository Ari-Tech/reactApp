import React,{Component} from 'react';

class States extends Component {
    
    constructor(props){
        super(props)
        this.state={"content":[]}
        this.handleClick=this.handleClick.bind(this)
        this.updateTime=this.updateTime.bind(this)
    }

    handleClick(){
        var data=Math.random();
        // var myArray =this.state.content.slice();
        // myArray.push(data);
        this.setState({
            "content":data
        })
    }
    updateTime(){
        this.forceUpdate()
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>Change Both</button>
                <button onClick={this.updateTime}>Update Time</button>
                <h2>{this.state.content}</h2>
                <div>{new Date().getTime()}</div>
            </div>
        )
    }
}

export default States;