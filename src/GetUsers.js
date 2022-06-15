import React, { Component } from 'react'
import axios from 'axios'
import Loading from './Loading'


 class GetUsers extends Component {

    constructor(props){
     super(props)

     this.state={
         users:[],
         loading:false
     }
     this.handleSubmit=this.handleSubmit.bind(this);
    }

    getUsers(){

     this.setState({
         loading:true
     })

      axios('https://jsonplaceholder.typicode.com/users')
      .then(responce => this.setState({
          users:[...this.state.users,...responce.data],
          loading:false
      }) )
    }

    handleSubmit(e){
     e.preventDefault();
     this.getUsers();
     console.log("data loaded")
    }


    componentDidMount(){
        this.getUsers();
    }

  render() {
    const {loading,users}=this.state;
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
         <input type="submit" value="Load data" />
        </form>
         {!loading ?users.map(user=>(
            <div key={user.id}>
            <h3 style={{color:'red'}}>{user.name}</h3>
            <p style={{color:'blue'}}>{user.email}</p>
            <hr />
            </div>
        )) :<Loading message="Please Wait"/>
        }
      </div>
    )
  }
}

export default GetUsers;
