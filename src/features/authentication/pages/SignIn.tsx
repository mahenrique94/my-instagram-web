import React from 'react'

import { i18n } from '@i18n'

import Spacings from '@helpers/Spacings'

import Public from '@containers/Public'

import Box from '@components/Box'
import Brand from '@components/Brand'
import Center from '@components/Center'
import Image from '@components/Image'
import Inline from '@components/Inline'
import Link from '@components/Link'
import Margin from '@components/Margin'
import Small from '@components/Small'
import Text from '@components/Text'

import availableAppleStore from '@img/available-apple-store.png'
import availablePlayStore from '@img/available-play-store.png'

const SignIn = () => (
  <Public>
    <Center>
      <Margin bottom={Spacings.xss}>
        <Box>
          <Brand />
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
            <Link to="/sign-up">
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
)

export default SignIn
