import React from 'react'
import { Hero, HeroBody, Container, Title, Subtitle, Button } from 'bloomer'

import footerbg from 'assets/footer_bg.jpg'

// :: ---

function FooterHero() {
  return (
    <Hero
      isColor='black'
      isSize='large'
      // isHalfHeight={true}
      style={{
        background: `url(${footerbg})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      }}
    >
      <HeroBody
        style={{
          background: `rgba(35,47,62,0.54)`,
        }}
      >
        <Container hasTextAlign='centered'>
          <Title>Taste the Difference.</Title>
          <Subtitle>Qitaqits is, and will forever be free.</Subtitle>
          <Button isColor='primary'>Get Started →</Button>
        </Container>
      </HeroBody>
    </Hero>
  )
}

export default FooterHero
