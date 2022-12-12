import React, { Component } from 'react'
const EnComponent=(OrComponent)=>{
class NewComponent extends Component {
  render() {
    return<OrComponent name="Suit"/>
  }
}
return NewComponent
}
export default EnComponent;
