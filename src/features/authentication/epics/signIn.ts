import PageStatus from '@constants/PageStatus'

import { AxiosError } from 'axios'
import { ofType } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, debounceTime, mergeMap } from 'rxjs/operators'

import { getAction } from '@utils/actions'

import { actions } from '../actions'
import ActionsTypes from '../ActionsTypes'
import { services } from '../services'

const signIn = (action$: any) =>
  action$.pipe(
    ofType(getAction(ActionsTypes.AUTH_REQUEST_SIGN_IN)),
    debounceTime(1000),
    mergeMap(({ payload }) => services.signIn(payload)),
    catchError((error: AxiosError, caught) =>
      of(actions.updateStatus(PageStatus.error), actions.updateError(error.response?.data)),
    ),
  )

export { signIn }
