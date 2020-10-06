import React, { Component} from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import Bugsnag from '@bugsnag/js';

class Users extends Component {

    state = ({
        yeah: false
    })

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                console.log(response);
            }).catch(err => {
                Bugsnag.notify(err);
            })
    }

    throwError(unhandled = false) {
        if (unhandled) throw new Error('Bad Thing!')
        try {
            throw new Error('Bad Thing!')
        } catch (e) {
            Bugsnag.notify(e, event => {
                event.context = 'Don’t worry - I handled it.'
                event.addMetadata('Susbscription',{
                    'type':'free'
                })
            })
        }
    }

    triggerRenderError() {
        this.setState({ yeah: true })
    }

    render() {
        var body = null;
        if(!sessionStorage.getItem('password')) {
            body = <Redirect to ='/' />
        } else {
            body = (
                <div id='buttons'>
                <h3>Send some errors by clicking below:</h3>
                <button onClick={() => this.throwError()}>Send handled</button>
                <button onClick={() => this.throwError(true)}>Send unhandled</button>
                <button onClick={() => this.triggerRenderError()}>Trigger a render error</button>
                {this.state.yeah ? <span>{this.state.yeah.non.existent.property}</span> : null}
            </div>
            )
        }
        return (
           body
        )
    }
}

export default Users;