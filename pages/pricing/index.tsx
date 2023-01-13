
import Link from 'next/link';
import { Inter } from '@next/font/google'

import { MainLayout } from '../../components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h1>Pricing</h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/Pricing.js</code>
          </p>
          <div>
            <Link href='/'>Home</Link>
          </div>
        </div>
    </MainLayout>
  )
}
