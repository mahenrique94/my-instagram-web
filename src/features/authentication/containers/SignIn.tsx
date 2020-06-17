import { connect } from 'react-redux'

import { actions } from '../actions'
import State from '../interfaces/State'
import { selectors } from '../selectors'

import SignIn from '../pages/SignIn'

const mapStateToProps = (state: State) => ({
  isError: selectors.getIsError(state),
  isLoading: selectors.getIsLoading(state),
})

const mapDispatchToProps = (dispatch: Function) => ({
  requestSignIn: (payload: any) => dispatch(actions.requestSignIn(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
