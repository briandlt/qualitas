import React, { Component } from 'react';

class Navigation extends Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     users: []
  //   }
  // }

  // componentWillMount() {
  //     request
  //       .get('http://localhost:3000/api/users')
  //       .end((err, res) => {
  //         const users = JSON.parse(res.text).users;
  //         this.setState({
  //           users: users
  //         });
  //       });
  // }

  render() {
    // var users = this.state.users.map((user, i) => {
    //   return <li key={i}>{user.nombre}</li>
    // });
    return(
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#!">Qualitas</a>
        </nav>
      </div>

    )
  }
}

export default Navigation;
