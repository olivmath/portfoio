import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"

const Container = tw.div`
  m-8
`
const TitleText = tw.h1`
  text-xl
`
const SubTitleText = tw.h2`
  text-lg
`
const ImageItem = tw.li`
  grid
  justify-items-center
`
const Grid = tw.ul`
  grid
  grid-cols-2
`
const TextList = tw.ul``
const Item = tw.li``

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | olivmath portfolio</title>
      </Head>
      <Container>
        <Grid>
          <Item>
            <TextList>
              <TitleText>
                Lucas Oliveira
              </TitleText>
              <SubTitleText>
                Senior Blockchain Engineer
              </SubTitleText>
            </TextList>
          </Item>
          <ImageItem>
            <Image
              src="/images/profile.png"
              height={144}
              width={144}
              alt="Your Name"
            />
          </ImageItem>
        </Grid>
      </Container>
    </>
  )
}

export default Home
