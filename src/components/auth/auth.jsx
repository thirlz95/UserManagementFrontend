import React, { Component } from 'react';
import axios from 'axios';
import { createHashHistory } from 'history'
import Spinner from '../spinner/spinner';
 
export const history = createHashHistory();

class CheckAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    }
  }

  componentDidMount = async () => {
    const jwt = await localStorage.getItem('x-auth-token');
    console.log('jwt');
    if (!jwt) {
      history.push('/');
    }
    axios.get('http://localhost:5000/api/auth', {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwt,
      }
    }).then(res => 
      this.setState({
        id: localStorage.setItem('_id', res.data._id),
        user: res.data._id,
      })
    ).catch(err => {
      console.log(err.response);
      // Commented out for dev speed
      localStorage.removeItem('x-auth-token');
      history.push('/');
    })
  }
  render() {
    console.log('user', this.state.user)
    if (this.state.user === undefined) {
      return (
        <Spinner />
      );
    }
    return(
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default CheckAuth;