import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLoader from '../components/organisms/MainLoader'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=>{
    window.location.replace('https://about-sentinelle.vercel.app/');
  })
  return (
    <>
      <MainLoader/>
    </>
  )
}
