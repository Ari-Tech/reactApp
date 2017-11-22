import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            header: "Header from props...",
            content: "Content from props..."
         }
    }
   render() {
       
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <h3>{this.props.extras}</h3>
         </div>
      );
   }
}
App.defaultProps = {
    extras: "some extra items...",
}
export default App;