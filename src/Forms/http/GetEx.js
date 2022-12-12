
import axios from 'axios'
import React, { Component } from 'react'
export default class GetEx extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          posts:[]
       }
     }
    componentDidMount(){
        axios.get("New.json")
        .then((response)=>{
        this.setState({post:response.data})
        })
    }
    render() {
    return (
        <table> 
        {posts.map((post)=>{
            return(
                <tr>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                </tr>
            )
        })}
      
    )
  }
}
