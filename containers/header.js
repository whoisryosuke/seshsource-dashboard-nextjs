import { connect } from 'react-redux'

import Header from '../components/header'

function mapStateToProps (state) {
  const { authentication } = state
  console.log(state);
  const { loggedIn } = authentication;
  return {
      loggedIn
  }
}

export default connect(mapStateToProps)(Header)
