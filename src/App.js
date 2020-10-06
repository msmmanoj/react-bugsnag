import React,{Component} from 'react';
import {BrowserRouter,NavLink} from 'react-router-dom'
import MainRoutes from './Components/MainRoutes/MainRoutes'
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
        <header>
            <img width='200' src='bugsnag.png' alt='Bugsnag Logo' />
            <nav>
                <ul>
                    <li><NavLink to = '/' exact>Home</NavLink></li>
                    <li><NavLink to = '/users' >Users</NavLink></li>
                    <li><NavLink to = '/log-out' >Logout</NavLink></li>
                </ul>
            </nav>
          </header>
          <body>
            <MainRoutes />
          </body>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
