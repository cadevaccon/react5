import React, { Component } from 'react'
import logo from "./profile.png"

export class Name extends Component {

    state = {
        fullName: "Ezzine Wael",
        bio:"bio",
        image:logo,
        profession:"profession"
      };
      handleClick=()=>this.setState({name:'Arya'})
      render() {
        const {fullName,bio,image,profession} = this.state
        return(
          <>
          <img src={logo} alt="" width="100px"></img>
          Hello {fullName}<br/>
        {bio}<br/>
        {profession}
        
        
          
       
          </>
        )
      }
}



export default Name
