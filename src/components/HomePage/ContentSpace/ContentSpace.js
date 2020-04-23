import React from 'react'
import { Section, Container, Columns, Column, Title, Subtitle } from 'bloomer'

// :: ---

function ContentSpace() {
  return (
    <Section>
      <Container>
        <Columns hasTextAlign='centered'>
          <Column>
            <Title>Amazing</Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur iste dolorem accusamus odit non fugit dolore quam, vero
              error eum minus sunt quae, quia voluptates ab autem voluptatibus,
              repellendus sit recusandae tempora. Iste aut nobis distinctio
              praesentium aliquid. Quod molestias asperiores id fugiat
              repellendus mollitia vitae, corporis commodi earum tempore!
            </p>
          </Column>
          <Column>
            <Title>Superb</Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati laudantium suscipit fugit est itaque aut ratione
              expedita natus, odit ducimus laboriosam deleniti ullam nihil cum
              inventore consequuntur enim eaque tempore vel vero tenetur ex.
              Similique.
            </p>
          </Column>
          <Column>
            <Title>Bonggaler</Title>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              quas aliquam omnis vel velit minus, veniam labore quo illo natus
              eligendi autem ratione sapiente illum deleniti? Dicta, sit? Maxime
              maiores blanditiis dignissimos saepe delectus voluptas excepturi
              aperiam possimus fugiat! Obcaecati?
            </p>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export default ContentSpace
