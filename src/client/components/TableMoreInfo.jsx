import React, { Component } from 'react';
import request from "superagent";

class TableMoreInfo extends Component{

    constructor(){
        super();
        this.state = {
          user: []
        }
    }

    componentWillMount() {
        request
          .get(`http://localhost:3000/users/${this.props.user}`)
          .end((err, res) => {
            const user = JSON.parse(res.text).result;
            this.setState({
              user: user
            });
          });
    }

  render() {
    let row =  (<tr>
                    <td><img src={this.state.user.avatar_url} width="50px"></img></td>
                    <td>{this.state.user.login}</td>
                    <td>{this.state.user.following}</td>
                    <td>{this.state.user.html_url}</td>
                </tr>);

    return(
        <div className="container">
            <h3 className="text-center mt-5">Mas info</h3>
            <table className="table mt-4">
                <thead className="thead-light">
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Perfil</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        </div>
    )
  }
}

export default TableMoreInfo;
