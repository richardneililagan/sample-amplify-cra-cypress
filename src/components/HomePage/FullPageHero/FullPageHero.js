import React from 'react'
import {
  Hero,
  HeroHeader,
  HeroBody,
  HeroVideo,
  Container,
  Title,
  Subtitle,
  Button,
} from 'bloomer'

import MainNavbar from 'components/common/MainNavbar/MainNavbar'
import SafeVideo from 'components/common/SafeVideo/SafeVideo'

import herovideo from 'assets/home_bg.mp4'

// :: ---

function FullPageHero() {
  return (
    <>
      <Hero isColor='black' isSize='large' isFullHeight={true}>
        <HeroHeader>
          <MainNavbar />
        </HeroHeader>
        <HeroBody>
          <HeroVideo isTransparent={true}>
            <SafeVideo src={herovideo} />
          </HeroVideo>
          <Container hasTextAlign='centered'>
            <Title>So far, yet so near.</Title>
            <Subtitle>
              Beat the quarantine lockdown from the comfort of your own home.
            </Subtitle>
            <Button isColor='primary'>Get Started →</Button>
          </Container>
        </HeroBody>
      </Hero>
    </>
  )
}

export default FullPageHero
