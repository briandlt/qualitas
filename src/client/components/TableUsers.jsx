import React, { Component } from 'react';
import request from 'superagent';

class TableUsers extends Component{

  constructor(){
    super();
    this.state = {
      users: []
    }
    this.getInfo = this.getInfo.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  componentWillMount() {
      request
        .get('http://localhost:3000/users')
        .end((err, res) => {
          const users = JSON.parse(res.text).result;
          this.setState({
            users: users
          });
        });
  }

  getInfo(user){
    this.props.showInfo(user);
  }

  getRepos(user){
    this.props.showRepos(user);
  }

  render() {
    let rows = this.state.users.map((user,i) => {
        return (<tr key={i}>
                    <td><img src={user.avatar_url} width="50px"></img></td>
                    <td>{user.login}</td>
                    <td><button className="btn btn-outline-primary" href="" onClick={() => this.getInfo(user)}>Ver</button></td>
                    <td><button className="btn btn-outline-success" href="" onClick={() => this.getRepos(user)}>Ver</button></td>
                </tr>)
    }); 

    return(
        <div className="container">
            <h3 className="text-center mt-5">Usuarios</h3>
            <table className="table mt-4">
                <thead className="thead-light">
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Info</th>
                        <th>Repositorios</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
  }
}

export default TableUsers;
