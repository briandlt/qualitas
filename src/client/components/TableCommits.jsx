import React, { Component } from 'react';
import request from 'superagent';

class TableCommits extends Component{

    constructor(){
        super();
        this.state = {
          commits: []
        }
        this.getCommit = this.getCommit.bind(this);
    }

    componentWillMount() {
        request
          .get(`http://localhost:3000/repos/commits/${this.props.user}/${this.props.repo}`)
          .end((err, res) => {
            const commits = JSON.parse(res.text).result;
            this.setState({
              commits: commits
            });
        });
    }

    getCommit(user){
        this.props.showCommits(user);
    }

  render() {
    let rows = this.state.commits.map((commit,i) => {
        return (<tr key={i}>
                    <td>{commit.sha}</td>
                    <td>{commit.commit.message}</td>
                </tr>)
    });
    return(
        <div className="container">
            <h3 className="text-center mt-5">Commits</h3>
            <table className="table mt-4">
                <thead className="thead-light">
                    <tr>
                        <th>Commit</th>
                        <th>Mensaje</th>
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

export default TableCommits;
