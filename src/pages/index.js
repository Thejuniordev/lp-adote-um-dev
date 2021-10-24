import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adote um dev</title>
        <meta name="description" content="Adote um dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  )
}
