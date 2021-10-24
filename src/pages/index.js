/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/no-unknown-property */
import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adote um dev</title>
        <meta name="description" content="Adote um dev" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
    </>
  )
}
