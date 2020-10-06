import React ,{Component} from 'react';
import {Redirect, Route,Switch} from 'react-router-dom';
import Home from '../Home/Home'
import Users from '../User/Users'

class MainRoutes extends Component {
    render() {
        return (
            <Switch> 
                <Route path='/users' component={Users} />
                <Route path='/log-out' component={() => {
                    sessionStorage.clear()
                    return <Redirect to ='/' />;
                }} />
                <Route path='/' component={Home} />
            </Switch>
        )
    }
}

export default MainRoutes;