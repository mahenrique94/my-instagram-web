import PageStatus from '@constants/PageStatus'

import { ofType } from 'redux-observable'
import { concat, Observable, of } from 'rxjs'
import { debounceTime, mergeMap } from 'rxjs/operators'

import { history } from '@history'
import { routes } from '@routes'

import { getAction } from '@utils/actions'
import { setToken } from '@utils/authentication'

import { actions } from '../actions'
import ActionsTypes from '../ActionsTypes'
import { apis } from '../apis'

const signIn = (action$: any) =>
  action$.pipe(
    ofType(getAction(ActionsTypes.AUTH_REQUEST_SIGN_IN)),
    debounceTime(1000),
    mergeMap(({ payload }) =>
      concat(
        of(actions.updateStatus(PageStatus.loading)),
        new Observable(observer => {
          apis.signIn(payload).subscribe(
            res => {
              observer.next(actions.updateStatus(PageStatus.rendered))
              setToken(res.response.result)
              history.push(routes.timeline)
            },
            error => {
              observer.next(actions.updateStatus(PageStatus.error))
              observer.next(actions.updateError(error.response.message))
            },
            () => observer.complete(),
          )
        }),
      ),
    ),
  )

export { signIn }
