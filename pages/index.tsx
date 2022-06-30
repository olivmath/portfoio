import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | olivmath portfolio</title>
      </Head>
      <h1 className='text-xl ml-8'>
        Lucas Oliveira
      </h1>
      <h2 className='text-lg ml-8'>
        Senior Blockchain Engineer
      </h2>
    </>
  )
}

export default Home
