import React, { Component } from 'react';

// import '../css/components/App.css';
import Navigation from './Navigation.jsx';
import TableUsers from "./TableUsers.jsx";
import TableRepos from './TableRepos.jsx';
import TableMoreInfo from './TableMoreInfo.jsx';
import TableCommits from './TableCommits.jsx';

class App extends Component {

    constructor(){
        super();
        this.state = {
          showUsers: true,
          showInfo: false,
          showRepos: false,
          showCommits: false,
          user: '',
          repo: ''
        }

        this.showInfo = this.showInfo.bind(this);
        this.showCommits = this.showCommits.bind(this);
        this.showRepos = this.showRepos.bind(this);
    }

    showInfo(user){
        this.setState({showUsers: false,
                            showInfo: true,
                            showRepos:false,
                            showCommits:false,
                            user: user,
                            repo: ''});
    }

    showRepos(user){
        this.setState({showUsers: false,
                            showInfo: false,
                            showRepos:true,
                            showCommits:false,
                            user: user,
                            repo: ''});
    }

    showCommits(user, repo){
        this.setState({showUsers: false,
                            showInfo: false,
                            showRepos:false,
                            showCommits:true,
                            user: user,
                            repo: repo});
    }

    render() {
        return (
            <div>
                <Navigation />
                {this.state.showUsers && <TableUsers showRepos={this.showRepos} showInfo={this.showInfo}/>}
                {this.state.showRepos && <TableRepos user={this.state.user.login} showCommits={this.showCommits}/>}
                {this.state.showInfo && <TableMoreInfo user={this.state.user.login} />}
                {this.state.showCommits && <TableCommits user={this.state.user.login} repo={this.state.repo}/>}
            </div>
        );
    }
}

export default App;
