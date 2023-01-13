
import Link from 'next/link';
import { Inter } from '@next/font/google'

import { MainLayout } from '../components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h1>Home</h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.js</code>
          </p>
          <div>
            <Link href='/about'>About</Link>
          </div>
        </div>
    </MainLayout>
  )
}
