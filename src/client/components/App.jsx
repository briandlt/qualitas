import React, { Component } from 'react';

// import '../css/components/App.css';
import Navigation from './Navigation.jsx';
import TableUsers from "./TableUsers.jsx";
import TableRepos from './TableRepos.jsx';
import TableMoreInfo from './TableMoreInfo.jsx';

class App extends Component {

    constructor(){
        super();
        this.state = {
          showUsers: true,
          showInfo: false,
          showRepos: false,
          showCommits: false,
          user: ''
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
                            user: user});
    }

    showRepos(){
        this.setState({showUsers: false,
                            showInfo: false,
                            showRepos:true,
                            showCommits:false,
                            user: ''});
    }

    showCommits(){
        this.setState({showUsers: false,
                            showInfo: false,
                            showRepos:false,
                            showCommits:true,
                            user: ''});
    }

    render() {
        return (
            <div>
                <Navigation />
                {this.state.showUsers && <TableUsers showRepos={this.showRepos} showInfo={this.showInfo}/>}
                {this.state.showRepos && <TableRepos showCommits={this.showCommits}/>}
                {this.state.showInfo && <TableMoreInfo user={this.state.user.login} />}
            </div>
        );
    }
}

export default App;
