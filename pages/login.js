import React from 'react'
import {connect} from 'react-redux'
import { login } from '../store'
import Examples from '../components/examples'
import { userActions } from '../actions';
// import "../assets/css/semantic.min.css"
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from '../containers/header';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class Login extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    return {}
  }

  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    const {dispatch} = this.props
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {dispatch} = this.props

    // dispatch login here
    // login(dispatch, form.data)
    dispatch(userActions.login(this.state.username, this.state.password));
  }

  render () {
    return (
      <section className="Login">
        <Header />
        <form onSubmit={ this.handleSubmit } className="ui form">
            <section className="field">
                <label>Username:</label>
                <input 
                    name="username" 
                    type="text" 
                    value={ this.state.username } 
                    onChange={ this.handleChange } 
                />
            </section>

            <section className="field">
                <label>Password:</label>
                <input 
                    name="password" 
                    type="text" 
                    value={ this.state.password } 
                    onChange={ this.handleChange } 
                />
            </section>
            <MuiThemeProvider theme={theme}>
              <Button variant="contained" color="primary" onClick={ this.handleSubmit }>
                Submit
              </Button>
            </MuiThemeProvider>
            {/* <button className="submit" onClick={ this.handleSubmit }>Submit</button> */}
        </form>
      </section>
    )
  }
}

export default connect()(Login)
