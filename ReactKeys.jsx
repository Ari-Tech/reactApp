import React from 'react'

class ReactKeys extends React.Component {
    constructor(props){
        super(props)
        this.state={
            "data":[
            {
                "id":"ef8729n",
                "name":"Comp1"
            },
            {
                "id":"dji8712l",
                "name":"Comp2"
            },
            {
                "id":"oewnd87lkm",
                "name":"Comp3"
            }]
        }
        
    }
    render(){
        return (
            <div>
           {this.state.data.map((v,k)=>{
           return <Contents value={v} identifier={k}/>
           })}
           </div>
        )
    }
}

class Contents extends React.Component{
    render (){
        return (
            <div> {this.props.value.name}  {this.props.value.id} for {this.props.identifier}</div>
        )
    }
}

export default ReactKeys