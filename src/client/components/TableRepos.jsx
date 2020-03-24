import React, { Component } from 'react';

class TableRepos extends Component{

  render() {
    return(
        <div className="container">
            <h3 className="text-center mt-5">Repositorios</h3>
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

                </tbody>
            </table>
        </div>
    )
  }
}

export default TableRepos;
