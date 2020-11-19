import React, { Component } from 'react'
import Timer from "./Component/Timer"
import Name from "./Component/Name"
import 'bootstrap/dist/css/bootstrap.min.css';

let Profile=Name

export class App extends Component {
    constructor(props) {
      super(props)
    

  this.state ={
    mount:true   
  };
}
  // handleClick=()=> {
  //   if (this.state.vis===1) 
  //     { 
  //       this.setState({vis:0})
       
  //     }
  //     else
  //     {
  //       this.setState({vis:1})
  //     }
  // };

    switch=()=>{
      this.setState({mount: !this.state.mount})
      console.log("test vrai")
    }

    // handleCl=this.state.show=>this.state.show? this.handleClick:this.handleClick2



  // handleClick=()=>this.setState({vis:'hidden',show:false})

  //  handleClick2=()=>this.setState({vis:'visibile',show:true})
  
  render() {
    return (<> 
    <div className="container"    >
      <div className="row">
        <div className="col-3">
       <button onClick={this.switch}>switch</button>
       </div>
      <div className="col-5">

      {this.state.mount ? <div><Profile/> <Timer/></div> : null}
         
      </div>
      </div>
      </div>
       </>
    )
  }
}

export default App
