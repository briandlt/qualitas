import React, { Component } from 'react';
import request from 'superagent';

class TableRepos extends Component{

    constructor(){
        super();
        this.state = {
          repos: []
        }
    }

    componentWillMount() {
        request
          .get(`http://localhost:3000/repos/${this.props.user}`)
          .end((err, res) => {
            const repos = JSON.parse(res.text).result;
            this.setState({
              repos: repos
            });
        });
    }

    getCommits(user, repo){
        this.props.showCommits(user, repo);
    }

  render() {
    let rows = this.state.repos.map((repo,i) => {
        return (<tr key={i}>
                    <td>{repo.name}</td>
                    <td>{repo.forks_count}</td>
                    <td>{repo.stargazers_count}</td>
                    <td><button className="btn btn-outline-info" onClick={() => this.getCommits(this.props.user, repo.name)}>Ver</button></td>
                </tr>)
    });
    return(
        <div className="container">
            <h3 className="text-center mt-5">Repositorios</h3>
            <table className="table mt-4">
                <thead className="thead-light">
                    <tr>
                        <th>Repositorio</th>
                        <th>Forks</th>
                        <th>Estrellas</th>
                        <th>Commits</th>
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

export default TableRepos;
