import React from 'react'
import { Hero, HeroBody, Container, Title, Subtitle } from 'bloomer'

// :: ---

function NotFoundPage() {
  return (
    <Hero isColor='black' isSize='large' isFullHeight={true}>
      <HeroBody>
        <Container hasTextAlign='centered'>
          <Title>You shall not pass.</Title>
          <Subtitle>Sorry, there is nothing for you here.</Subtitle>
        </Container>
      </HeroBody>
    </Hero>
  )
}

export default NotFoundPage
