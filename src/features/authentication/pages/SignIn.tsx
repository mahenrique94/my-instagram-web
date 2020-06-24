import HttpErrors from '@constants/HttpErrors'

import React from 'react'

import { i18n } from '@i18n'

import Spacings from '@helpers/Spacings'

import Public from '@containers/Public'

import Box from '@components/Box'
import Brand from '@components/Brand'
import Center from '@components/Center'
import Error from '@components/Error'
import Form from '@components/Form'
import Html from '@components/Html'
import Image from '@components/Image'
import Inline from '@components/Inline'
import Link from '@components/Link'
import Margin from '@components/Margin'
import RowDivider from '@components/RowDivider'
import Small from '@components/Small'
import Text from '@components/Text'

import { actions } from '../actions'
import { fields } from '../fields'

import availableAppleStore from '@img/available-apple-store.png'
import availablePlayStore from '@img/available-play-store.png'

interface Props {
  error: string
  isError: boolean
  isLoading: boolean
  requestSignIn: typeof actions.requestSignIn
}

const SignIn = ({ error, isError, isLoading, requestSignIn }: Props) => {
  const handleSubmit = (values: Record<string, any>) => {
    requestSignIn({
      password: values.password,
      user: values.user,
    })
  }

  return (
    <Html title={i18n.t('pages.titles.signIn')}>
      <Public>
        <Center>
          <Margin bottom={Spacings.xss}>
            <Box>
              <Margin bottom={Spacings.lgg}>
                <Brand />
              </Margin>
              <Margin bottom={Spacings.smm}>
                <Form
                  fields={[fields.user, fields.password]}
                  isLoading={isLoading}
                  onSubmit={handleSubmit}
                  submitButtonLabel={i18n.t('buttons.signIn')}
                />
              </Margin>
              <Margin bottom={Spacings.smm}>
                <RowDivider>{i18n.t('labels.or')}</RowDivider>
              </Margin>
              <Margin bottom={Spacings.smm}>
                {isError && error === HttpErrors.unauthorized && (
                  <Error>{i18n.t('errors.api.unauthorized')}</Error>
                )}
              </Margin>
              <Link to="">
                <Small>{i18n.t('questions.forgetPassword')}</Small>
              </Link>
            </Box>
          </Margin>
          <Margin bottom={Spacings.sm}>
            <Box>
              <Inline center>
                <Margin right={Spacings.xs}>
                  <Text>
                    <Small>{i18n.t('questions.hasNoAccount')}</Small>
                  </Text>
                </Margin>
                <Link to="">
                  <Small>{i18n.t('labels.signUp')}</Small>
                </Link>
              </Inline>
            </Box>
          </Margin>
          <Margin bottom={Spacings.sm}>
            <Text>{i18n.t('labels.getApp')}.</Text>
          </Margin>
          <Margin bottom={Spacings.sm}>
            <Inline center>
              <Margin right={Spacings.xs}>
                <Link to="https://apps.apple.com/app/instagram/id389801252">
                  <Image
                    alt={i18n.t('descriptions.images.availablePlayStore')}
                    height={40}
                    src={availablePlayStore}
                    width={135}
                  />
                </Link>
              </Margin>
              <Link to="https://play.google.com/store/apps/details?id=com.instagram.android">
                <Image
                  alt={i18n.t('descriptions.images.availableAppleStore')}
                  height={40}
                  src={availableAppleStore}
                  width={135}
                />
              </Link>
            </Inline>
          </Margin>
        </Center>
      </Public>
    </Html>
  )
}

export default SignIn
