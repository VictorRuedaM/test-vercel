import Head from 'next/head'
import Link from 'next/link';
import { Inter } from '@next/font/google'

import { Navbar } from '../components/Navbar';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    
     <>
      <h1>About Page</h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.js</code>
          </p>
          <div>
            Go to <Link href='/'>Home</Link>
          </div>
        </div>
     </>
   
  )
}

About.getLayout = function getLayout(page: JSX.Element){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
